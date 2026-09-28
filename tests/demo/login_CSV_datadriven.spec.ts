import { expect, test } from '@playwright/test'
import { LoginPage_Datadriven } from '../../pages/loginPage_datadriven.ts'
import { readCSV } from '../../utils/csvReader.ts';

const loginDataCSV = readCSV('test-data/login_datadriven_CSV.csv');

loginDataCSV.forEach((data: any) => {
    if (data.run !== 'true') return;

    test(`Login Test - ${data.username}`, async ({ page }) => {
        const loginPage = new LoginPage_Datadriven(page);
        await loginPage.gotoLoginPage();
        await loginPage.login(data.username, data.password);

        if (data.expected === 'success') {
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        } else {
            await expect(loginPage.errorMessage).toBeVisible();
        }
    });
});