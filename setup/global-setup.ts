import { chromium, FullConfig, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

async function globalSetup(config: FullConfig) {
    const user = process.env.VALIDUSER!;
    const password = process.env.PASSWORD!;
    const url = process.env.URL!;
    const storageStatePath = config.projects[0].use.storageState as string;
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await page.goto(url);
    await loginPage.fillUsername(user);
    await loginPage.fillPassword(password);
    await loginPage.clickLoginButton();
    await expect(loginPage.logoutButton).toBeVisible();
    await page.context().storageState({ path: storageStatePath });

    await browser.close();
}

export default globalSetup;