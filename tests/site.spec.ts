import { test, expect, type Page } from "@playwright/test";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { site, practiceAreas } from "../src/config/site";
import { practiceTopics } from "../src/config/topics";
import { contactLinks, prepareMessage } from "../src/lib/contact";

const review = resolve(".impeccable/review/code-audit");
mkdirSync(review, { recursive: true });
const routes = [
  { path: "/", name: "home", title: `${site.hero.titleLead} ${site.hero.titleEnd}` },
  { path: "/sobre", name: "sobre", title: site.about.title },
  { path: "/areas", name: "areas", title: site.areasIntro.title },
  ...practiceAreas.map((area) => ({
    path: `/areas/${area.slug}`,
    name: area.slug,
    title: area.title,
  })),
  ...practiceTopics.map((topic) => ({
    path: `/areas/${topic.slug}`,
    name: topic.slug,
    title: topic.title,
  })),
  { path: "/contato", name: "contato", title: site.contactContent.title },
  { path: "/privacidade", name: "privacidade", title: site.privacy.title },
  { path: "/pagina-inexistente", name: "404", title: site.notFound.title },
];

async function assertNoOverflow(page: Page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
    "Sem rolagem horizontal",
  ).toBe(true);
}

test("rotas, metadados, links, acessibilidade e capturas", async ({
  page,
  request,
}, testInfo) => {
  const errors: string[] = [];
  const internal = new Set<string>();
  page.on("pageerror", (error) => errors.push(error.message));
  const audit: unknown[] = [];
  for (const route of routes) {
    const response = await page.goto(route.path, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(route.name === "404" ? 404 : 200);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("main h1")).toHaveCount(1);
    await expect(page.locator("main h1")).toHaveText(route.title);
    await expect(page.locator(".demo-bar")).toContainText(
      "Sem atendimento jurídico ativo",
    );
    expect(
      await page
        .locator('meta[name="robots"]')
        .evaluateAll(
          (tags) =>
            tags.length > 0 &&
            tags.every((tag) =>
              tag.getAttribute("content")?.includes("noindex"),
            ),
        ),
    ).toBe(true);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /opengraph-image/,
    );
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
    await assertNoOverflow(page);
    await expect(
      page.locator('a[href^="mailto:"], a[href*="wa.me"]'),
    ).toHaveCount(0);
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((links) =>
        links.map((link) => link.getAttribute("href") || ""),
      );
    hrefs
      .filter((href) => href.startsWith("/"))
      .forEach((href) => internal.add(href));
    for (const href of hrefs.filter((href) => href.startsWith("#")))
      await expect(page.locator(href)).toHaveCount(1);
    await page.addScriptTag({ path: require.resolve("axe-core") });
    const result = await page.evaluate(async () => {
      const engine = (
        window as unknown as {
          axe: {
            run: (
              target: Document,
              options: unknown,
            ) => Promise<{
              violations: { id: string; impact: string; nodes: unknown[] }[];
            }>;
          };
        }
      ).axe;
      return engine.run(document, {
        runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "best-practice"] },
      });
    });
    audit.push({ route: route.path, violations: result.violations });
    expect.soft(result.violations, `${route.path}: WCAG A/AA`).toEqual([]);
    await page.screenshot({
      path: `${review}/${route.name}-${testInfo.project.name}.png`,
      fullPage: true,
    });
    if (route.name === "home")
      await page.screenshot({ path: `${review}/${testInfo.project.name}.png` });
  }
  for (const href of internal)
    expect((await request.get(href)).ok(), `Link interno ${href}`).toBe(true);
  expect(errors).toEqual([]);
  writeFileSync(
    `${review}/accessibility-${testInfo.project.name}.json`,
    JSON.stringify(audit, null, 2),
  );
});

test("FAQ abre por teclado e menu móvel fecha com Escape e navegação", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  const question = page.getByText(site.faq.items[0].question, { exact: true });
  await question.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByText(site.faq.items[0].answer, { exact: true }),
  ).toBeVisible();
  await page.locator("details").first().scrollIntoViewIfNeeded();
  await page.screenshot({
    path: `${review}/faq-aberta-${testInfo.project.name}.png`,
  });
  await page.keyboard.press("Enter");
  await expect(
    page.getByText(site.faq.items[0].answer, { exact: true }),
  ).toBeHidden();
  if (testInfo.project.name === "mobile") {
    const menu = page.getByRole("button", { name: "Menu", exact: true });
    await menu.click();
    await expect(
      page.getByRole("navigation", { name: site.interface.navigation }),
    ).toBeVisible();
    await page.screenshot({ path: `${review}/menu-mobile.png` });
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await menu.click();
    await page
      .getByRole("navigation", { name: site.interface.navigation })
      .getByRole("link", { name: "Sobre", exact: true })
      .click();
    await expect(page).toHaveURL(/\/#sobre$/);
    await expect(
      page.getByRole("button", { name: "Menu", exact: true }),
    ).toHaveAttribute("aria-expanded", "false");
  }
});

test("validação, preparo, cópia, atualização e limpeza sem transmissão", async ({
  page,
  context,
}, testInfo) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/contato", { waitUntil: "networkidle" });
  const transmissions: string[] = [];
  page.on("request", (request) => {
    if (request.method() !== "GET")
      transmissions.push(`${request.method()} ${request.url()}`);
  });
  const submit = page.getByRole("button", {
    name: site.form.submit,
    exact: true,
  });
  await submit.click();
  await expect(
    page.getByText(site.form.nameError, { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText(site.form.topicError, { exact: true }),
  ).toBeVisible();
  await expect(page.locator("#contact-name")).toBeFocused();
  await page.screenshot({
    path: `${review}/contato-erros-${testInfo.project.name}.png`,
    fullPage: false,
  });
  await page.locator("#contact-name").fill("Ana Maria");
  await page.locator("#contact-topic").selectOption("Sucessões");
  await page.locator("#contact-preference").selectOption("E-mail");
  await submit.click();
  const message = page.getByRole("textbox", { name: site.form.previewLabel });
  await expect(message).toHaveValue(/Meu nome é Ana Maria/);
  await expect(message).toHaveValue(/Sucessões/);
  await expect(message).toBeFocused();
  await expect(page.getByRole("status")).toHaveText(site.form.ready);
  await page.getByRole("button", { name: site.form.copy, exact: true }).click();
  await expect(page.getByRole("status")).toHaveText(site.form.copied);
  expect((await page.evaluate(() => navigator.clipboard.readText())).replace(/\r\n/g, "\n")).toBe(await message.inputValue());
  await page.screenshot({
    path: `${review}/contato-preparado-${testInfo.project.name}.png`,
    fullPage: false,
  });
  await page.locator("#contact-name").fill("João");
  await expect(message).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: site.form.copy, exact: true }),
  ).toHaveCount(0);
  await expect(page.getByRole("status")).toHaveText(site.form.stale);
  await submit.click();
  await expect(message).toHaveValue(/Meu nome é João/);
  await page
    .getByRole("button", { name: site.form.clear, exact: true })
    .click();
  await expect(page.locator("#contact-name")).toHaveValue("");
  await expect(page.locator("#contact-name")).toBeFocused();
  expect(transmissions).toEqual([]);
  expect(
    await page.evaluate(() => ({
      local: localStorage.length,
      session: sessionStorage.length,
      cookies: document.cookie,
    })),
  ).toEqual({ local: 0, session: 0, cookies: "" });
  await page.reload();
  await expect(page.locator("#contact-name")).toHaveValue("");
});

test("demonstração conclui com cópia e esconde WhatsApp sem destino real", async ({ page }) => {
  await page.goto("/contato");
  await expect(page.locator(".contact-direct-details")).toContainText("Telefone / WhatsApp");
  await expect(page.locator(".contact-direct-details")).toContainText("contato@exemplo.invalid · fictício");
  await expect(page.locator(".contact-direct-details")).toContainText("(00) 0000-0000 · fictício");
  await expect(page.locator(".contact-direct-details a")).toHaveCount(0);
  await expect(page.getByRole("button", { name: site.form.whatsappAction, exact: true })).toHaveCount(0);
  await page.locator("#contact-name").fill("Ana");
  await page.locator("#contact-topic").selectOption({ index: 1 });
  await page.getByRole("button", { name: site.form.submit, exact: true }).click();
  await expect(page.getByRole("link", { name: site.form.whatsappAction, exact: true })).toHaveCount(0);
  await expect(page.getByRole("button", { name: site.form.copy, exact: true })).toBeEnabled();
  await page.evaluate(() => Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: () => Promise.reject(new Error("Permission denied")) } }));
  await page.getByRole("button", { name: site.form.copy, exact: true }).click();
  await expect(page.getByRole("status")).toHaveText(site.form.copyError);
  expect(await page.locator("#prepared-message").evaluate((el: HTMLTextAreaElement) => el.selectionEnd - el.selectionStart)).toBeGreaterThan(100);
});

test("canais opcionais e texto preservam acentos sem gerar links inválidos", () => {
  const testInfo = test.info();
  test.skip(
    testInfo.project.name !== "desktop",
    "Funções puras executadas uma vez.",
  );
  const message = prepareMessage({
    name: "  Ana   Maria  ",
    topic: "Sucessões",
    preference: "E-mail",
  });
  expect(message).toContain("Meu nome é Ana Maria.");
  expect(contactLinks(message, { email: null, whatsapp: null })).toEqual({
    email: null,
    whatsapp: null,
  });
  const valid = contactLinks(message, {
    email: "contato@example.com",
    whatsapp: "+55 (11) 99999-9999",
  });
  expect(valid.email).toMatch(/^mailto:contato@example\.com\?subject=/);
  expect(decodeURIComponent(valid.email || "")).toContain(message);
  expect(valid.whatsapp).toMatch(/^https:\/\/wa\.me\/5511999999999\?text=/);
  expect(decodeURIComponent(valid.whatsapp || "")).toContain(message);
  expect(
    contactLinks(message, {
      email: "inválido",
      whatsapp: "javascript:5511999999999",
    }),
  ).toEqual({ email: null, whatsapp: null });
});

test("link de salto permanece oculto até receber foco por teclado", async ({
  page,
}) => {
  await page.goto("/");
  const skip = page.getByRole("link", { name: site.interface.skip });
  await page.keyboard.press("Tab");
  await expect(skip).toBeFocused();
  expect(
    await skip.evaluate((element) => getComputedStyle(element).clipPath),
  ).toBe("none");
  await page.keyboard.press("Enter");
  expect(await page.evaluate(() => location.hash)).toBe("#conteudo");
});

test("320px, tablet, nome longo e movimento reduzido", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "Matriz adicional executada uma vez.",
  );
  for (const width of [320, 768]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await assertNoOverflow(page);
    await page.screenshot({
      path: `${review}/home-${width}.png`,
      fullPage: true,
    });
    await page.locator(".site-header .brand").evaluate((element) => {
      element.textContent = "Miguel Avelar de Albuquerque e Vasconcelos";
    });
    await assertNoOverflow(page);
    await page.screenshot({ path: `${review}/nome-longo-${width}.png` });
    await page.goto("/contato");
    await assertNoOverflow(page);
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page
      .locator("html")
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe("auto");
  expect(
    await page
      .locator(".arrow")
      .first()
      .evaluate((element) => getComputedStyle(element).transitionDuration),
  ).toBe("0s");
});

test("robots, sitemap, compartilhamento e 404 de área desconhecida", async ({
  request,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "Rotas técnicas executadas uma vez.",
  );
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).not.toContain("<loc>");
  const image = await request.get("/opengraph-image");
  expect(image.ok()).toBe(true);
  expect(image.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/icon.svg")).ok()).toBe(true);
  expect((await request.get("/areas/tema-inexistente")).status()).toBe(404);
});

test("assuntos têm navegação real, leitura organizada e tabelas sem overflow", async ({
  page,
}, testInfo) => {
  for (const topic of practiceTopics) {
    await page.goto("/areas");
    await page
      .locator(".directory-topics")
      .getByRole("link", { name: new RegExp(`^${topic.title}`) })
      .click();
    await expect(page).toHaveURL(new RegExp(`/areas/${topic.slug}$`));
    await expect(page.locator("h1")).toHaveText(topic.title);
    const article = page.locator(".article-content");
    expect((await article.innerText()).split(/\s+/).length).toBeGreaterThan(
      350,
    );
    await expect(page.locator(".profile-context")).toContainText(
      "Personagem fictício",
    );
    const index = page.getByRole("navigation", {
      name: site.pages.area.topicsNavigation,
    });
    await index.getByRole("link", { name: topic.sections[1].title }).click();
    expect(await page.evaluate(() => location.hash)).toBe(
      `#${topic.sections[1].id}`,
    );
    if (topic.comparison) {
      await expect(page.getByRole("table")).toHaveCount(1);
      await expect(page.getByRole("columnheader")).toHaveCount(3);
      await expect(page.getByRole("rowheader")).toHaveCount(3);
      const region = page.getByRole("region", { name: topic.comparison.title });
      if (testInfo.project.name === "mobile") {
        expect(
          await region.evaluate((el) => getComputedStyle(el).overflowX),
        ).toBe("auto");
        await region.focus();
        await page.keyboard.press("ArrowRight");
        await expect
          .poll(() => region.evaluate((el) => el.scrollLeft))
          .toBeGreaterThan(0);
      } else {
        expect(
          await region.evaluate((el) => el.scrollWidth <= el.clientWidth + 1),
        ).toBe(true);
      }
    }
    for (const slug of topic.related)
      await expect(
        page.locator(".related-topics").getByRole("link", {
          name: new RegExp(
            `^${practiceTopics.find((item) => item.slug === slug)!.title}`,
          ),
        }),
      ).toHaveAttribute("href", `/areas/${slug}`);
    if (testInfo.project.name === "mobile") {
      const profile = await page.locator(".profile-context").boundingBox();
      const content = await article.boundingBox();
      expect(profile!.y).toBeGreaterThan(content!.y + content!.height - 1);
    }
    await assertNoOverflow(page);
  }
  if (testInfo.project.name === "mobile") {
    for (const width of [320, 390]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto("/areas/divorcio");
      await page.evaluate(() => document.fonts.ready);
      for (const label of ["Decisões", "Procedimento", "Expectativas"]) {
        const lines = await page
          .getByRole("rowheader", { name: label, exact: true })
          .evaluate((element) => {
            const range = document.createRange();
            range.selectNodeContents(element);
            return range.getClientRects().length;
          });
        expect(lines, `${label} deve permanecer inteiro em ${width}px`).toBe(1);
      }
      await assertNoOverflow(page);
      const table = page.getByRole("table");
      const fragments = await table.evaluate((element) => {
        const broken: string[] = [];
        for (const cell of element.querySelectorAll("th, td")) {
          const node = cell.firstChild;
          if (!node || node.nodeType !== Node.TEXT_NODE) continue;
          const text = node.textContent ?? "";
          for (const match of text.matchAll(/\S+/g)) {
            const range = document.createRange();
            range.setStart(node, match.index!);
            range.setEnd(node, match.index! + match[0].length);
            if (range.getClientRects().length > 1) broken.push(match[0]);
          }
        }
        return broken;
      });
      expect(fragments, `Palavras inteiras em ${width}px`).toEqual([]);
      await page
        .locator(".comparison")
        .screenshot({ path: `${review}/divorcio-tabela-${width}.png` });
      const region = page.locator(".comparison-scroll");
      await region.evaluate((el) => {
        el.scrollLeft = el.scrollWidth;
      });
      await page
        .locator(".comparison")
        .screenshot({ path: `${review}/divorcio-tabela-final-${width}.png` });
    }
  }
});
