import { test } from "@playwright/test";
import { verify } from "crypto";
test.use({ headless: false });
//interaction with frames using : URI, NAME, INDEX,FRAMELOCATOR
test (`interact with Frames`, async({page}) => {
    await page.goto(`https://leafground.com/frame.xhtml`);
    //URL:'https://leafground.com/default.xhtml
    const frameurl=page.frame({url:"https://leafground.com/default.xhtml"})
    frameurl?.locator("#click").click
    await page.waitForTimeout(3000);
});


test(`interact with Frames using Name`, async({page}) => {
    await page.goto(`https://leafground.com/frame.xhtml`);  
    //NAME:'frame1'
    const framename=page.frame({name:"frame2"})
    framename?.locator("#click").click();
    await page.waitForTimeout(3000);
    const title= await page.locator(`//button[contains(text(),"Hurray! You Clicked Me.")]`).isVisible();
    console.log("Is Button Enabled in main page:",title);
});

test.only(`interact with framelocator`, async({page}) => {
    await page.goto(`https://leafground.com/frame.xhtml`);
    //FRAMELOCATOR
    const frameloc=page.frameLocator(`[src=default.xhtml"]`);
    await frameloc.locator("#Click").click();
    await page.waitForTimeout(3000);

});