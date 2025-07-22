import { type Page, type Locator , expect } from '@playwright/test';

export class SimpleArmoryPage {
    readonly page: Page;
    readonly realmInput: Locator;
    readonly realmListItem: Locator;
    readonly charInput: Locator;
    readonly loginButton: Locator;
    readonly avatar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.realmInput = page.getByRole('textbox', { name: 'Realm' });
        this.realmListItem = page.locator('.listItem');
        this.charInput = page.getByRole('textbox', { name: 'Character' });
        this.loginButton = page.getByRole('button', { name: 'Go' });
        this.avatar = page.getByRole('button', { name: 'Profile' });
    
    }

    async fillRealmInput(realm: string) {
        await this.realmInput.fill(realm);
    }

    async clickListItem() {
        await this.realmListItem.click();
    }

    async fillCharInput(charName: string) {
        await this.charInput.fill(charName);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}