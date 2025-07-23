import { type Page, type Locator , expect } from '@playwright/test';

export class PetsPage {
    readonly page: Page;
    readonly petsNavButton: Locator;
    readonly tableTitle: Locator;
    readonly petsButton: Locator;
    readonly findPetButton: Locator;
    readonly searchDropdown: Locator;
    readonly searchByStatusButton: Locator;
    readonly findPetsNextButton: Locator;
    readonly selectStatusDropdown: Locator;
    readonly SearchButton: Locator;
    readonly itemsPerPageButton: Locator;
    readonly petNameElement: Locator;
    readonly petStatusElement: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.petsNavButton = page.getByRole('button', { name: 'Pets' });
        this.tableTitle = page.getByRole('heading', { name: 'Table View' });
        this.petsButton = page.getByRole('button', { name: 'Pets' }).nth(1);
        this.findPetButton = page.getByRole('menuitem', { name: 'Find Pet' });
        this.searchDropdown = page.getByText('Search AttributeSearch');
        this.searchByStatusButton = page.getByRole('option', { name: 'Status' }).locator('span');
        this.findPetsNextButton = page.getByRole('button', { name: 'Next' });
        this.selectStatusDropdown = page.locator('#status__select');
        this.SearchButton = page.getByRole('button', { name: 'Search' });
        this.itemsPerPageButton = page.getByRole('listbox', { name: 'Items per page:' }).locator('div').nth(2);
        this.petNameElement = page.locator('#pet-row__name');
        this.petStatusElement = page.locator('#pet-row__status');
    }

    async clickPetsNavButton() {
        await this.petsNavButton.click();
    }

   async expectTableTitleToBeVisible() {
        await expect(this.tableTitle).toBeVisible();
    }

    async clickPetsButton() {
        await this.petsButton.click();
    }   

    async clickFindPetButton() {
        await this.findPetButton.click();
    }

    async clickSearchDropdown() {
        await this.searchDropdown.click();
    }

    async clickSearchByStatusButton() {
        await this.searchByStatusButton.click();
    }   

    async clickFindPetsNextButton() {
        await this.findPetsNextButton.click();
    }   

    async clickSelectStatusDropdown() {
        await this.selectStatusDropdown.click();
    }   

    async clickStatusOption(status: 'Sold' | 'Available' | 'Pending') {
        const statusOption = this.page.getByRole('option', { name: status });
        await statusOption.click();
}

    async clickSearchButton() {
        await this.SearchButton.click();
    }   

    async clickItemsPerPageButton() {
        await this.itemsPerPageButton.click();
    }   

    async setItemsPerPage(option: '5' | '10' | '20' | '50') {
        const noOfItemsOption = this.page.getByRole('option', { name: option });
        await noOfItemsOption.click();
    }
}