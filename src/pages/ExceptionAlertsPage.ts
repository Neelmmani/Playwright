import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ExceptionAlertsPage extends BasePage {

  async clickExceptionAlerts() {
    await this.page.getByRole('link', {
      name: 'Exceptions & Alerts'
    }).click();
  }


// select Transloaderog

  async selectTransloaderlog() {
    await this.page.getByRole('button',{
      name: 'Transloader Log'
    }).click();
  }

// select Enriched Data
async selectEnrichedData(){
  await this.page.getByRole('button' , {
    name:'Enriched Data'
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


// Enter Container Number in search textbox

    async searchContainerNumber(containerNumber: string) {
        await this.page.getByRole('textbox', {
            name: 'Container Number'
        }).fill(containerNumber);
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

// Delete PopUp confirmation
    async confirmDeleteButton(){
await this.page.getByRole('button', {
      name: 'Delete'
    }).click();
  }

// Status Dropdown

    async clickStatusDropdown(){
      await this.page.getByRole('combobox',{
        name: 'Status'
      }).click();
    }

    // select status

//   async selectStatus(status: string) {
//     await this.page.
//   getByRole('option', {
//      name: 'EXCEPTION' 
//     }).click();
// }


async selectStatus(status: string) {
  await this.page.getByText(status, { exact: true }).click();
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