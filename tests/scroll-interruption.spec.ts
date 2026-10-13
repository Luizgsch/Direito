import { test, expect } from "@playwright/test";

test("rolagem nativa interrompe a inércia sem voltar à posição anterior", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/lenis/);
  await page.mouse.wheel(0, 600);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(20);
  const positions = await page.evaluate(async () => {
    window.scrollTo({ top: 2200, behavior: "instant" });
    const samples: number[] = [];
    for (let frame = 0; frame < 45; frame++) {
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      samples.push(window.scrollY);
    }
    return samples;
  });
  expect(Math.min(...positions)).toBeGreaterThanOrEqual(2198);
  expect(Math.max(...positions)).toBeLessThanOrEqual(2202);
  await page.mouse.wheel(0, -400);
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2100);
  await page.keyboard.press("End");
  await expect.poll(() => page.evaluate(() => Math.abs(window.scrollY - (document.documentElement.scrollHeight - window.innerHeight)))).toBeLessThan(2);
  await page.mouse.wheel(0, -500);
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight - window.scrollY)).toBeGreaterThan(20);
  await page.locator("#contact-name").focus();
  await expect(page.locator("#contact-name")).toBeFocused();
  const focusPositions = await page.evaluate(async () => {
    const samples: number[] = [];
    for (let frame = 0; frame < 30; frame++) {
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      samples.push(window.scrollY);
    }
    return samples;
  });
  expect(Math.max(...focusPositions) - Math.min(...focusPositions)).toBeLessThanOrEqual(2);
});
