import { test } from "@playwright/test";
import { verify } from "crypto";
test.use({ headless: false });
test(`Learn about Frames in Playwright`, async ({ page }) => {
    await page.goto(`https://leafground.com/frame.xhtml`);
    const frameurl=page.frame({url:"https://leafground.com/default.xhtml"})
    frameurl?.locator("#click").click
    await page.locator(`//button[contains(text(),"Hurray! You Clicked Me.")]`).isVisible();
    console.log("Button Clicked inside the Frame");
    await page.waitForTimeout(3000);
    const totalframes=page.frames();
    console.log("Total Frames in the Page:",totalframes.length);
    const outerframe=page.frameLocator(`//iframe[@src='page.xhtml']`);
    const innerframe=outerframe.frameLocator(`//iframe[@src='framebutton.xhtml']`);
    await innerframe.locator("#click").click();
    await page.waitForTimeout(3000);
    console.log("Clicked the button inside nested Frame");
});