import { expect, test } from '@playwright/test'
import { LoginPage_Datadriven } from '../../pages/loginPage_datadriven.ts'
import login_dynamicdatadriven from '../../test-data/login_dynamicdatadriven.json'


login_dynamicdatadriven.forEach((data) => {

    if (!data.run) return;

    test(`Login Test- ${data.username}`, async ({ page }) => {

        const loginPage_Datadriven = new LoginPage_Datadriven(page);

        await loginPage_Datadriven.gotoLoginPage();
        await loginPage_Datadriven.login(data.username, data.password);

        if (data.expected === 'success') {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

        }
        else {
            await expect(loginPage_Datadriven.errorMessage).toBeVisible();
        }
    })

});
