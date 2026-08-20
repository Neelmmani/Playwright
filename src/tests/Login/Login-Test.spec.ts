import { test, expect } from '../../fixtures/baseFixture';
import { LoginPage } from '../../pages/LoginPage';
import { env } from '../../config/env';

test('Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto(env.baseUrl);

  await loginPage.enterEmail(env.email);

  await loginPage.clickSendOtp();

  await page.pause(); // Enter OTP and click Verify

  await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({
    path: 'playwright/.auth/user.json'
  });

});