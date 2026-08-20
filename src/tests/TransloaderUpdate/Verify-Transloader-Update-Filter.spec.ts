import { test, expect } from '../../fixtures/baseFixture';
import {TransloaderUpdatePage } from '../../pages/TransloaderUpdatePage';

test.beforeEach(async ({ page }) => {

  const transloaderUpdatePage = new TransloaderUpdatePage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await transloaderUpdatePage.clickTransloaderUpdate();

});

// Verify Transloader update page open

test('TC_01_Verify Transloader Update Page Opens', async ({ page }) => {

  const transloaderUpdatePage = new TransloaderUpdatePage(page);

  await transloaderUpdatePage.clickTransloaderUpdate();

  await page.close();

});


// TC_02_Click on each transloader and verify the selected value is displayed in the dropdown

test(
  'TC_02_Click on each transloader and verify the selected value is displayed in the dropdown',
  async ({ page }) => {

    const transloaderUpdatePage =
      new TransloaderUpdatePage(page);

    const transloaders = [
      'LSI',
      'WTC Group',
      'Columbia Container',
      'Seaboard',
      'RayMont'
    ];

    for (const transloader of transloaders) {

      await transloaderUpdatePage.selectTransloader(transloader);

      await transloaderUpdatePage.clickSearch();

      expect(
        await transloaderUpdatePage.getSelectedTransloader()
      ).toContain(transloader);

    }
  }
);


// TC_03 Search Booking ID



test('TC_03 Search Booking ID', async ({ page }) => {

  const transloaderUpdatePage = new TransloaderUpdatePage(page);

  await transloaderUpdatePage.searchBookingId(
    '038NY1445085'
  );

  await transloaderUpdatePage.clickSearch();

});




// TC_04 Search Container Number

test('TC_04 Search Container Number', async ({ page }) => {

const transloaderUpdatePage = new TransloaderUpdatePage(page);

await transloaderUpdatePage.searchContainerNumber(
  'MSNU2867351'
);          

await transloaderUpdatePage.clickSearch();

});



// TC_05 Search RailCar Number

    test('TC_05 Search RailCar Number', async ({ page }) => {

    const transloaderUpdatePage = new TransloaderUpdatePage(page);

    await transloaderUpdatePage.searchRailCarNumber(
      'RL.TCKU1494660'
    );

    await transloaderUpdatePage.clickSearch();

});


// TC_06 Verify Exception Status Dropdown

test('TC_06 Verify Status Dropdown', async ({ page }) => {      

    const transloaderUpdatePage = new TransloaderUpdatePage(page);

    await transloaderUpdatePage.clickStatusDropdown();     

    await transloaderUpdatePage.selectStatus('EXCEPTION');

    await transloaderUpdatePage.clickSearch();

});

// TC_07 Verify Success Status Dropdown

test('TC_07 Verify Success Status Dropdown', async ({ page }) => {

  const transloaderUpdatePage = new TransloaderUpdatePage(page);

    await transloaderUpdatePage.clickStatusDropdown();

    await transloaderUpdatePage.selectStatus('SUCCESS');

    await transloaderUpdatePage.clickSearch();

});



// TC_08 click on the view icon button and verify the details of the record are displayed in the modal window

test('TC_08 Verify View Icon button', async ({ page }) => {

    const transloaderUpdatePage = new TransloaderUpdatePage(page);

    await transloaderUpdatePage.searchContainerNumber
    ('MSNU2867351');

    await transloaderUpdatePage.clickSearch();

    await transloaderUpdatePage.clickViewIcon();

});


// TC_09 click on the Edit icon butto and enter the details 

test('TC_09 Verify Edit Icon button', async ({ page }) => {

    const transloaderUpdatePage = new TransloaderUpdatePage(page);

    await transloaderUpdatePage.searchContainerNumber(
      'TRHU1831034'
    );

    await transloaderUpdatePage.clickSearch();

    await transloaderUpdatePage.wait(2);

    await transloaderUpdatePage.clickEditIcon();

    await transloaderUpdatePage.wait(2);

    await transloaderUpdatePage.clickRailCarNumber('TCKU1494660');

    await transloaderUpdatePage.wait(2);

    await transloaderUpdatePage.clickSave();

});

// TC_10 click on the Approve icon button and verify the details of the record are displayed & change the status to Success

test('TC_10 Verify Approve Icon button', async ({ page }) => {

    const transloaderUpdatePage = new TransloaderUpdatePage(page);

    await transloaderUpdatePage.searchContainerNumber(
      'TGBU375917-2'
    );  

    await transloaderUpdatePage.clickSearch();

    await transloaderUpdatePage.clickEditIcon();

    await transloaderUpdatePage.clickSeal('35412');

    await transloaderUpdatePage.clickApprove();

    // expect(
    //   await transloaderUpdatePage.getStatus()
    //     ).toContain('SUCCESS');

});


// Delete the data 

test ('TC_11 Verify Delete Icon button' , async({ page }) =>{

  const transloaderUpdatePage = new TransloaderUpdatePage(page);

  await transloaderUpdatePage.searchContainerNumber('TRHU1831034');

  await transloaderUpdatePage.clickSearch();

  await transloaderUpdatePage.clickDeleteIcon();

  await transloaderUpdatePage.confirmDeleteButton();

  
}

)



