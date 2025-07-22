import { test, expect } from '@playwright/test';
import {SimpleArmoryPage} from '../pages/simple-armory-page';
import characterData from '../data/character-data';

const url = characterData.website;
const charName = characterData.charName;
const realm = characterData.realm;
const loggedInUrl = characterData.loggedInUrl;
let simpleArmoryPage: SimpleArmoryPage;

test.only('login with realm and character', async ({ page }) => {
    const simpleArmoryPage = new SimpleArmoryPage(page);
    await page.goto(url);
    await expect(simpleArmoryPage.loginButton).toBeDisabled();
    await simpleArmoryPage.fillRealmInput(realm);
    await simpleArmoryPage.clickListItem();
    await simpleArmoryPage.fillCharInput(charName);
    await expect(simpleArmoryPage.loginButton).toBeEnabled();
    await simpleArmoryPage.clickLoginButton();
    await expect(page).toHaveURL(loggedInUrl);
    await expect(simpleArmoryPage.avatar).toBeVisible();
});