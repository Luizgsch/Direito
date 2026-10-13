import { test, expect } from "@playwright/test";
import { site } from "../src/config/site";

test("home completa, âncoras, página interna, teclado e histórico", async ({ page }, testInfo) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/lenis/);
  await page.mouse.wheel(0, 450);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(100);
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  const nav = page.getByRole("navigation", { name: site.interface.navigation });
  async function navigate(label: string, id: string) {
    if (testInfo.project.name === "mobile") await menu.click();
    const link = nav.getByRole("link", { name: label, exact: true });
    await link.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(new RegExp(`/#${id}$`));
    if (testInfo.project.name === "mobile") await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect.poll(async () => page.locator(`#${id} h1, #${id} h2`).first().evaluate(el => el.getBoundingClientRect().top - document.querySelector(".site-header")!.getBoundingClientRect().bottom)).toBeGreaterThanOrEqual(0);
  }
  for (const item of site.navigation) await navigate(item.label, item.href.split("#")[1]);
  await navigate("Atuação", "atuacao");
  await page.locator('#atuacao a[href="/areas/divorcio"]').click();
  await expect(page).toHaveURL(/\/areas\/divorcio$/);
  await navigate("Sobre", "sobre");
  await expect(page.locator("#sobre")).toBeFocused();
  await page.goBack();
  await expect(page).toHaveURL(/\/areas\/divorcio$/);
  await page.goForward();
  await expect(page).toHaveURL(/\/#sobre$/);
  await navigate("Contato", "contato");
  await page.locator("#contact-name").fill("Pessoa de exemplo");
  await page.locator("#contact-topic").selectOption({ index: 1 });
  await page.getByRole("button", { name: "Preparar mensagem", exact: true }).click();
  await expect(page.locator("#prepared-message")).toBeVisible();
  await page.screenshot({ path: `.impeccable/review/home-navigation-${testInfo.project.name}.png`, fullPage: true });
  await page.locator(".site-header .brand").click();
  await expect(page).toHaveURL(/\/#inicio$/);
});
