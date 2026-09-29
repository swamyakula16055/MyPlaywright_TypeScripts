import { test, expect } from '@playwright/test';
import { LoginPage_Datadriven } from '../../pages/loginPage_datadriven.ts'
import { readData } from '../../utils/dataReader.ts';

// const testData = readData('./test-data/loginDataNew.json');
// const testData = readData('./test-data/LoginData.csv');
const testData = readData('./test-data/login_xlsx_data.xlsx', 'Sheet1');

test.describe('Login Tests', () => {

    for (const data of testData) {

        // if (data.run !== 'yes') continue;

        test(`Login test for - ${data.username}`, async ({ page }) => {

            test.skip(data.run !== 'yes', 'Run Flag=NO');

            const loginPage = new LoginPage_Datadriven(page);

            await test.step('Go to login page', async () => {
                await loginPage.gotoLoginPage();
            });

            await test.step('Perform Login', async () => {
                await loginPage.login(data.username, data.password);
            });

            await test.step('Validate Result', async () => {
                if (data.expected === 'success') {
                    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                } else {
                    await expect(loginPage.errorMessage).toBeVisible();
                }
            });
        });
    }

});