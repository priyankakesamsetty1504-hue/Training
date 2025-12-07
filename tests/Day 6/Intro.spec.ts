import { test, expect } from "@playwright/test"
test.use({ headless: false });
test("Login success", async ({ page }) => {
  await page.goto("http://leaftaps.com/opentaps/control/main");
  
await page.locator(`//input[@id='username']`).fill("demosalesmanager"); 
await page.locator(`//input[@id='password']`).fill("crmsfa");
await page.locator(`//input[@class='decorativeSubmit']`).click();
  // Check if welcome message is visible
  await expect(page.locator(`//div[@id="form"]//h2[contains(text(),"Welcome ")]`)).toBeVisible();

  // Check URL changed
  //await expect(page).toHaveURL(/dashboard/);
});
