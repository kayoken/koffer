import { test, expect } from "@playwright/test";

test("hello world test", async ({ page }) => {
  await page.goto("http://localhost:5173");
  const content = await page.textContent("span.hero-text");
  expect(content).toBe("This Is Koffer.");
});
