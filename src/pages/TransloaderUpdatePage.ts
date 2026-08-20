import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TransloaderUpdatePage extends BasePage {

  // Open the Transloader Update

  async clickTransloaderUpdate() {
    await this.page.getByRole('link', {
      name: 'Transloader Update'
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

// Enter Rail Car No. in search textbox

    async searchRailCarNumber(railCarNumber: string) {
        await this.page.getByRole('textbox', {
            name: 'Rail Car No.'
        }).fill(railCarNumber);
    }

// Enter Rail Car no.

    async clickRailCarNumber(railCarNumber: string) {
        await this.page.getByRole('textbox', {
            name: 'Rail Car'
        }).fill(railCarNumber);
    }

// Enter Seal No.

      async clickSeal(seal: string) {
await this.page.getByRole('textbox', {
    name: 'Seal'
}).fill(seal);
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
 
  // check the Status 
  async getStatus() {
  return await this.page.getByText(
    /SUCCESS|EXCEPTION/
  ).textContent();
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