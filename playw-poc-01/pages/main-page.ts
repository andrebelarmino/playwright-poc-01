import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class MainPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async userIsLogged() {
        return await expect(this.page.getByText('You logged into a secure area!')).toBeVisible();
    }

    async logout() {
        await this.page.click('a[href="/logout"]');
    }
    
}