import { type Page } from '@playwright/test';
import { expect } from '@playwright/test';
import { BasePage } from '../utils/base-page';

export class StartPageHomePage extends BasePage {
    
    constructor(page: Page) {
        super(page);
    }

    async inputSearch(inputSearch : string) {
        await this.page.getByPlaceholder('Search privately').click();
        await this.page.getByPlaceholder('Search privately').fill(inputSearch);
    }

    async clickBtnSearch() {
        await this.page.getByRole('search', { name: 'top search bar' }).getByLabel('search button').click();
    }

    async checkElementByIdContainText(id : string, text : string) {
        await expect(this.page.getByTestId(id)).toContainText(text);
    }

    override async goToLink() {
        // Call method from inheritance (BasePage)
        const link = 'https://www.startpage.com/';
        await super.goToLink(link);
    }

}