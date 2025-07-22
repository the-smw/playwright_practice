import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login-page';

const url = process.env.URL!;
const username = process.env.VALIDUSER!;
const password = process.env.PASSWORD!;
let loginPage: LoginPage;

test('login test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto(url);
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);
    await loginPage.clickLoginButton();
    await expect(loginPage.logoutButton).toBeVisible();
});
