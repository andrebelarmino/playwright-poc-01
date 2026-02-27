import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async login(user: string, password: string) {
        await this.page.type('input[name="username"]', user);
        await this.page.type('input[name="password"]', password);
        await this.page.click('button[type="submit"]');
    }

    async userIsLoggedOut() {
        return await expect(this.page.getByText('You logged out of the secure area!')).toBeVisible();
    }

}