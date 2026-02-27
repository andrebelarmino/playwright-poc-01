import type { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async go() {
        await this.page.goto('https://the-internet.herokuapp.com/');
    }

    async goToLoginPage() {
        await this.page.click('a[href="/login"]');
    }
    
}