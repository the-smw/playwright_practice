import {test as baseTest} from '@playwright/test';
import {LoginPage} from '../pages/login-page';
import {PetsPage} from '../pages/pets-page';

type pages = {
    loginPage: LoginPage;
    petsPage: PetsPage;
};

const pagesFixture = baseTest.extend<pages>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    petsPage: async ({ page }, use) => {
        await use(new PetsPage(page));
    }
});

export const test = pagesFixture;
export const expect = pagesFixture.expect;