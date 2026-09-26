import { expect, test } from '@playwright/test'
import { LoginPage_Datadriven } from '../../pages/loginPage_datadriven.ts'
import login_datadriven from '../../test-data/login_datadriven.json'

test('Valid login test', async ({ page }) => {

    const loginPage_Datadriven = new LoginPage_Datadriven(page);

    await loginPage_Datadriven.gotoLoginPage();
    await loginPage_Datadriven.login(
        login_datadriven.valid_user.username,
        login_datadriven.valid_user.password,

    );
    })

test('Invalid login test', async ({ page }) => {

    const loginPage_Datadriven = new LoginPage_Datadriven(page);

    await loginPage_Datadriven.gotoLoginPage();
    await loginPage_Datadriven.login(
        login_datadriven.invalid_user.username,
        login_datadriven.invalid_user.password,
    );

    await expect(loginPage_Datadriven.errorMessage).toBeVisible();
})