import { chromium, FullConfig, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

async function globalSetup(config: FullConfig) {
    const username = process.env.CI_USER || process.env.VALIDUSER!;
    const password = process.env.CI_PW || process.env.PASSWORD!;
    const url = 'https://training.testifi.io/';
    const storageStatePath = config.projects[0].use.storageState as string;
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await page.goto(url);
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);
    await loginPage.clickLoginButton();
    await expect(loginPage.logoutButton).toBeVisible();
    await page.context().storageState({ path: storageStatePath });

    await browser.close();
}

export default globalSetup;