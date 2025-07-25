import {test, expect} from '../fixtures/pom-fixture';

test.describe('Pets Page Tests', () => {
    test('test name', async ({page, petsPage}) => {
        await page.goto('https://training.testifi.io/');
        await petsPage.clickPetsNavButton();
        await page.pause();
    });
})