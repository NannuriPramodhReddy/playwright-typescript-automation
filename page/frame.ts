import {Page,Locator} from "@playwright/test";


export class Frame{
   readonly frame1:Locator;
   

    constructor(page:Page){
        this.frame1=page.frameLocator("[src='frame_1.html']").locator("input[type='text']");
    }

    async enterTextInFrame(text:string){
        await this.frame1.fill(text);
    }


}
