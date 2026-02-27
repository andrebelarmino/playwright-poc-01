import { type Page } from '@playwright/test';
import { type Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    async goToLink(link: string) {
        await this.page.goto(link);
    }

    async clickBtn(btn: Locator) {
        btn.click();
    }

    async waitForTimeoutInSeconds(seconds : number) {
        this.page.waitForTimeout(seconds);
    }

}