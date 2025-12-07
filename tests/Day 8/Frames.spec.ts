import { test } from "@playwright/test";
test.use({ headless: false });
test(`Learn about Frames in Playwright`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`);
    const allframes=page.frames();
    console.log(allframes);
    const framecount=allframes.length
    console.log("Total Frames in the Page:",framecount);
    console.log(`Total Frames in the Page: ,${framecount}`);
    for (let i = 0; i < framecount; i++) 
    {
        await allframes[i].title()
        console.log(`the title of the frames are : ${await allframes[i].title()}`);
    }

    for (let tempval of allframes)
        {
            const title=await tempval.title();
            console.log(`The title of the frames are : ${title}`);
        }
});