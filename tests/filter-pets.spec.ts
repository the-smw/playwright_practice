import { test, expect } from '@playwright/test';
import { PetsPage } from '../pages/pets-page';

const url = 'https://training.testifi.io/';

let petsPage: PetsPage;

test.beforeEach(async ({ page }) => {
    await page.goto(url);
    petsPage = new PetsPage(page);
    await petsPage.clickPetsNavButton()
    await petsPage.expectTableTitleToBeVisible();
    await petsPage.clickPetsButton();
    await expect(petsPage.findPetButton).toBeVisible();
    await petsPage.clickFindPetButton();
    await petsPage.clickSearchDropdown();
    await expect(petsPage.searchByStatusButton).toBeVisible();
    await petsPage.clickSearchByStatusButton();
    await petsPage.clickFindPetsNextButton();
    await petsPage.clickSelectStatusDropdown();
});

test.describe('Pets Page Tests', () => {
    test('filter sold pets', async () => {
        await petsPage.clickStatusOption('Sold');
        await petsPage.page.keyboard.press('Escape');
        await petsPage.clickSearchButton();
        await petsPage.clickItemsPerPageButton();
        await petsPage.setItemsPerPage('50');
        const petNameCount = await petsPage.petNameElement.count();
        console.log(`Number of pets with status 'Sold': ${petNameCount}`);

        await expect(petsPage.petNameElement.first()).toBeVisible();
        await expect(petsPage.petNameElement).toHaveCount(petNameCount);

        for (let petIndex = 0; petIndex < petNameCount; petIndex++) {
            const name = await petsPage.petNameElement.nth(petIndex).innerText();
            const status = await petsPage.petStatusElement.nth(petIndex).innerText();
            console.log(`Pet #${petIndex + 1}: ${name}, Status: ${status}`);
            expect(status.toLowerCase()).toBe('sold');
        }
    });

    test('filter available pets', async () => {
        await petsPage.clickStatusOption('Available');
        await petsPage.page.keyboard.press('Escape');
        await petsPage.clickSearchButton();
        await petsPage.clickItemsPerPageButton();
        await petsPage.setItemsPerPage('50');
        const petNameCount = await petsPage.petNameElement.count();
        console.log(`Number of pets with status 'Available': ${petNameCount}`);

        await expect(petsPage.petNameElement.first()).toBeVisible();
        await expect(petsPage.petNameElement).toHaveCount(petNameCount);

        for (let petIndex = 0; petIndex < petNameCount; petIndex++) {
            const name = await petsPage.petNameElement.nth(petIndex).innerText();
            const status = await petsPage.petStatusElement.nth(petIndex).innerText();
            console.log(`Pet #${petIndex + 1}: ${name}, Status: ${status}`);
            expect(status.toLowerCase()).toBe('available');
        }
    });     

    test('filter pending pets', async () => {
        await petsPage.clickStatusOption('Pending');
        await petsPage.page.keyboard.press('Escape');
        await petsPage.clickSearchButton();
        await petsPage.clickItemsPerPageButton();
        await petsPage.setItemsPerPage('50');
        const petNameCount = await petsPage.petNameElement.count();
        console.log(`Number of pets with status 'Pending': ${petNameCount}`);

        await expect(petsPage.petNameElement.first()).toBeVisible();
        await expect(petsPage.petNameElement).toHaveCount(petNameCount);

        for (let petIndex = 0; petIndex < petNameCount; petIndex++) {
            const name = await petsPage.petNameElement.nth(petIndex).innerText();
            const status = await petsPage.petStatusElement.nth(petIndex).innerText();
            console.log(`Pet #${petIndex + 1}: ${name}, Status: ${status}`);
            expect(status.toLowerCase()).toBe('pending');
        }
    });     
});