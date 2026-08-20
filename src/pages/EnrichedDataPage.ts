import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class EnrichedDataPage extends BasePage {

  // Open the Transloader Log

  async clickEnrichedData() {
    await this.page.getByRole('link', {
      name: 'Enriched Data'
    }).click();
  }

  // Enter Booking ID in search textbox

  async searchBookingId(bookingId: string) {
    await this.page.getByRole('textbox', {
      name: 'Booking ID'
    }).fill(bookingId);
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

async clickExceptionStatus(){

  await this.page.getByRole('button', {
      name: 'Exception'
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
// Click on the View icon button
  async clickViewIcon() {
  await this.page
    .locator('button:has([data-testid="VisibilityIcon"])')
    .click();
}

// click on the Edit icon button
  async clickEditIcon() {
  await this.page
    .locator('button:has([data-testid="EditIcon"])')
    .click();
}

// Click on the Delete icon button
  async clickDeleteIcon() {
  await this.page
    .locator('button:has([data-testid="DeleteIcon"])')
    .click();
}

// Click on the Back button

  async clickBackButton(){

    await this.page
    .locator('button:has([data-testid="ArrowBackIcon"])')
    .click();
  }

// Delete PopUp confirmation
    async confirmDeleteButton(){
await this.page.getByRole('button', {
      name: 'Delete'
    }).click();
  }

  // click on the save button

  async clickSave() {
    await this.page.getByRole('button', {
      name: 'Save'
    }).click();
  }

  // click on the Approve button

  async clickApprove() {
    await this.page.getByRole('button', {
      name: 'Approve'
    }).click();
  }
    
  // click on the cancel button

  async clickCancel() {
    await this.page.getByRole('button', {
      name: 'Cancel'
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