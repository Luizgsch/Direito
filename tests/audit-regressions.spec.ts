import { test, expect } from "@playwright/test";
import { practiceAreas, site } from "../src/config/site";
import { practiceTopics } from "../src/config/topics";
import { contactLinks } from "../src/lib/contact";

test("configuração mantém rotas únicas, categorias e assuntos relacionados válidos", () => {
  test.skip(test.info().project.name !== "desktop", "Dados estáticos verificados uma vez.");
  const slugs = [...practiceAreas, ...practiceTopics].map((item) => item.slug);
  expect(new Set(slugs).size).toBe(slugs.length);
  for (const topic of practiceTopics) {
    expect(practiceAreas.some((area) => area.slug === topic.category)).toBe(true);
    for (const slug of topic.related)
      expect(practiceTopics.some((item) => item.slug === slug)).toBe(true);
    const ids = [...topic.sections.map((section) => section.id), "preparacao"];
    if (topic.comparison) ids.push("comparacao");
    expect(new Set(ids).size).toBe(ids.length);
  }
  expect(contactLinks("Mensagem", {
    email: "contato@exemplo.invalid", whatsapp: "0000000000",
  })).toEqual({ email: null, whatsapp: null });
});

test("atalho de conteúdo e índice transferem foco sem contornar a seção", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  expect(await page.locator("main").evaluate((el) => getComputedStyle(el).outlineStyle)).toBe("none");
  await page.goto("/areas/divorcio");
  const index = page.locator(".article-index a").first();
  await index.focus();
  expect(await index.evaluate((el) => getComputedStyle(el).outlineStyle)).toBe("solid");
  await page.keyboard.press("Enter");
  const section = page.locator(`#${practiceTopics[0].sections[0].id}`);
  await expect(section).toBeFocused();
  expect(await section.evaluate((el) => getComputedStyle(el).outlineStyle)).toBe("none");
});

test("cópia pendente não sobrescreve o estado após editar ou limpar", async ({ page }) => {
  await page.goto("/contato");
  await page.locator("#contact-name").fill("Ana");
  await page.locator("#contact-topic").selectOption({ index: 1 });
  await page.getByRole("button", { name: site.form.submit, exact: true }).click();
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: () => new Promise<void>((resolve) => {
        (window as Window & { finishCopy?: () => void }).finishCopy = resolve;
      }) },
    });
  });
  await page.getByRole("button", { name: site.form.copy, exact: true }).click();
  await page.locator("#contact-name").fill("Maria");
  await page.evaluate(() => (window as Window & { finishCopy?: () => void }).finishCopy?.());
  await expect(page.getByRole("status")).toHaveText(site.form.stale);
  await page.getByRole("button", { name: site.form.submit, exact: true }).click();
  await page.evaluate(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: () => new Promise<void>((_, reject) => {
        (window as Window & { failCopy?: () => void }).failCopy = () => reject(new Error("Permission denied"));
      }) },
    });
  });
  await page.getByRole("button", { name: site.form.copy, exact: true }).click();
  await page.getByRole("button", { name: site.form.clear, exact: true }).click();
  await page.evaluate(() => (window as Window & { failCopy?: () => void }).failCopy?.());
  await expect(page.locator(".message-status")).toBeEmpty();
  await expect(page.locator("#contact-name")).toBeFocused();
  await expect(page.locator("#prepared-message")).toHaveCount(0);
});
