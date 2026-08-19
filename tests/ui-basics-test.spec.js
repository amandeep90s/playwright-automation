// @ts-check
import { expect, test } from "@playwright/test";

test("browser context playwright test", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.w3schools.com/");

  await expect(page).toHaveTitle(/W3Schools/);
});

test("page playwright test", async ({ page }) => {
  await page.goto("https://www.w3schools.com/");

  await expect(
    page.getByRole("heading", { name: "Learn to Code" }),
  ).toBeVisible();
});
