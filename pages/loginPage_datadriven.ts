import { Page, Locator } from "@playwright/test";

export class LoginPage_Datadriven {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage=page.locator('[data-test="error"]')

    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/')
    }
    async login(user: string, password: string) {
        await this.username.fill(user);
        await this.password.fill(password);
        await this.loginButton.click();
    }

    // async verifyLoginSuccess() {
    //     await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    // }

}
