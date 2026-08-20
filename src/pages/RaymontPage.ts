import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class RaymontPage extends BasePage {

  // Open the Raymont Menu

  async clickRaymontmenu() {
    await this.page.getByRole('link', {
      name: 'Raymont'
    }).click();
  }


  // search Booking Number
 async searchBookingId(bookingId: string) {
    await this.page.getByRole('textbox', {
      name: 'Booking Number'
    }).fill(bookingId);
  }

  // Click on the Search button

  async clickSearch() {
  await this.page.getByRole('button', {
    name: 'Search'
  }).click();
}

  //  Click on the Reset button

  async clickReset() {
    await this.page.getByRole('button', {
      name: 'Reset'
    }).click();
  }

  async clickStatusDropdown() {
  await this.page.getByRole('combobox', {
    name: 'Status'
  }).click();
}

// Select a status from the dropdown

async selectStatus(status: string) {

  await this.page
    .locator('[role="option"]')
    .filter({ hasText: status })
    .click();
}

// Click Pdf Download
  async clickPdfdownload() {
  await this.page
    .locator('button:has([data-testid="PictureAsPdfIcon"])')
    .click();
}

// Click Excel Sheet Data Download

  async clickDownloadExcel() {

  await this.page.getByRole('button', {
    name: 'Download Excel'
  }).click();

}

// Pagination Method

  async selectPageSize(size: string) {

  await this.page.getByRole('button', {
    name: `Items per page: ${size}`,
    exact: true
  }).click();

}

async clickPageNumber(pageNo: string) {

  await this.page.getByRole('button', {
    name: `Page ${pageNo}`
  }).click();

}

async getPageIndicator() {

  return await this.page.locator(
    '.dx-info'
  ).textContent();

}

async getTotalPages(): Promise<number> {

  const text = await this.page
    .locator('.dx-info')
    .textContent();

  const match = text?.match(
    /Page \d+ of (\d+)/
  );

  return Number(match?.[1]);

}

}
