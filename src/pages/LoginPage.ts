import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async enterEmail(email: string) {
    await this.page
      .getByRole('textbox', { name: 'Email' })
      .fill(email);
  }

  async clickSendOtp() {
    await this.page
      .getByRole('button', { name: 'Login with OTP' })
      .click();
  }

  async enterOtp(otp: string) {
    await this.page.fill('input[name="otp"]', otp);
  }

  async clickVerify() {
    await this.page.getByRole('button', { name: /verify/i }).click();
  }
}