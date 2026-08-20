import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class EmailPage extends BasePage {

  // Open the Email Menu

  async clickEmailMenu() {
    await this.page.getByRole('link', {
      name: ' Email'
    }).click();
  }

  // Click on the Transloader dropdown

  async clickTransloaderDropdown() {
    await this.page.getByRole('combobox', {
      name: 'Transloader'
    }).click();
  }

  // Select a transloader from the dropdown

async selectTransloader(transloader: string) {

  await this.page.getByRole('combobox', {
    name: 'Transloader'
  }).click();

  await this.page.getByRole('option', {
    name: transloader
  }).click();
}

// Get the selected transloader value

async getSelectedTransloader() {
  return await this.page.getByRole('combobox', {
    name: 'Transloader'
  }).textContent();
}

 // Enter Booking ID in search textbox

  async searchBookingId(bookingId: string) {
    await this.page.getByRole('textbox', {
      name: 'Booking ID'
    }).fill(bookingId);
  }

  // select for calender date picker

async enterFromDate(date: string) {
  await this.page.getByRole('textbox', {
    name: 'From Date'
  }).fill(date);
}

async enterToDate(date: string) {
  await this.page.getByRole('textbox', {
    name: 'To Date'
  }).fill(date);
}

// Click on the Extracted button

async clickExtractedButton() {
  await this.page.getByRole('button', {
    name: 'Extracted'
  }).click();
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

  // Click on the email record at the given index

  async openEmailRecord(index: number) {
  await this.page
    .locator('.email-row')
    .nth(index)
    .click();
}

  // Click on the first email record in the table

async openFirstEmailRecord() {
  await this.page.locator('.email-row').first().click();
}

// Click on the second email record in the table

async openSecondEmailRecord() {
  await this.page.locator('.email-row').nth(1).click();
}


// Get the attachment file name 

async getAttachmentFileName() {
  return await this.page
    .locator('.attachment-file-name')
    .first()
    .textContent();
}

// Click on the Download Attachment link

async downloadAttachment() {

  const downloadPromise =
    this.page.waitForEvent('download');

  await this.page.locator(
    '.attachment-download-icon'
  ).first().click();

  return await downloadPromise;
}

  constructor(page: Page) {
    super(page);
  }
  
async getEmailRows() {
  return this.page.locator('.email-row');
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
