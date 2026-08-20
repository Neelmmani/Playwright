import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransloaderLogPage extends BasePage {

  // Open the Transloader Log

  async clickTransloaderLog() {
    await this.page.getByRole('link', {
      name: 'Transloader Log'
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
      name: 'Booking Number'
    }).fill(bookingId);
  }


// Enter COntainer Number in search textbox

    async searchContainerNumber(containerNumber: string) {
        await this.page.getByRole('textbox', {
            name: 'Container Number'
        }).fill(containerNumber);
    }

// Enter Rail Car No. in searc textbox

    async searchRailCarNumber(railCarNumber: string) {
        await this.page.getByRole('textbox', {
            name: 'Rail Car No.'
        }).fill(railCarNumber);
    }

// Click on the Status dropdown

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
    
// Click on the View icon button
  async clickViewIcon() {
  await this.page
    .locator('button:has([data-testid="VisibilityIcon"])')
    .click();
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