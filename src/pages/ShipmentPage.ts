import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShipmentPage extends BasePage {

  // Open the Shipment Menu

  async clickShipmentPage() {
    await this.page.getByRole('link', {
      name: 'Shipment'
    }).click();
  }

  // Enter Container Number in search textbox

      async searchContract(Contract: string) {
        await this.page.getByRole('textbox', {
            name: 'Contract'
        }).fill(Contract);
    }

  // Enter Ship To in search textbox

     async searchShipTo(ShipTo: string) {
        await this.page.getByRole('textbox', {
            name: 'Ship To'
        }).fill(ShipTo);
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