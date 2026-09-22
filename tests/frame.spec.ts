import {test, expect} from '@playwright/test';


import {Frame} from '../page/frame';

test("Frame Handling", async ({page})=>{
    const frame = new Frame(page);
    await page.goto('https://ui.vision/demo/webtest/frames/');
    await frame.enterTextInFrame("Hello Frame");
    await expect(frame.frame1).toHaveValue("Hello Frame");
})