import { test, expect } from '../../fixtures/baseFixture';
import { TransloaderLogPage } from '../../pages/TransloaderLogPage';

test.beforeEach(async ({ page }) => {

  const transloaderLogPage = new TransloaderLogPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await transloaderLogPage.clickTransloaderLog();

});

// Verify Transloader log page open

test('TC_01_Verify Transloader Log Page Opens', async ({ page }) => {

  const transloaderLogPage = new TransloaderLogPage(page);

  await transloaderLogPage.clickTransloaderLog();

  await page.close();

});


// TC_02_Click on each transloader and verify the selected value is displayed in the dropdown

test(
  'TC_02_Click on each transloader and verify the selected value is displayed in the dropdown',
  async ({ page }) => {

    const transloaderLogPage =
      new TransloaderLogPage(page);

    const transloaders = [
      'LSI',
      'WTC Group',
      'Columbia Container',
      'Seaboard',
      'RayMont'
    ];

    for (const transloader of transloaders) {

      await transloaderLogPage.selectTransloader(transloader);

      await transloaderLogPage.clickSearch();

      expect(
        await transloaderLogPage.getSelectedTransloader()
      ).toContain(transloader);

    }
  }
);



// TC_03 Search Booking ID



test('TC_03 Search Booking ID', async ({ page }) => {

  const transloaderLogPage = new TransloaderLogPage(page);

  await transloaderLogPage.searchBookingId(
    '038NY1445085'
  );

  await transloaderLogPage.clickSearch();

});




// TC_04 Search Container Number

test('TC_04 Search Container Number', async ({ page }) => {

const transloaderLogPage = new TransloaderLogPage(page);

await transloaderLogPage.searchContainerNumber(
  'MSNU2867351'
);          

await transloaderLogPage.clickSearch();

});



// TC_05 Search RailCar Number

    test('TC_05 Search RailCar Number', async ({ page }) => {

    const transloaderLogPage = new TransloaderLogPage(page);

    await transloaderLogPage.searchRailCarNumber(
      'RL.TCKU1494660'
    );

    await transloaderLogPage.clickSearch();

});


// TC_06 Verify Exception Status Dropdown

test('TC_06 Verify Status Dropdown', async ({ page }) => {      

    const transloaderLogPage = new TransloaderLogPage(page);

    await transloaderLogPage.clickStatusDropdown();     

    await transloaderLogPage.selectStatus('EXCEPTION');

    await transloaderLogPage.clickSearch();

});

// TC_07 Verify Success Status Dropdown

test('TC_07 Verify Success Status Dropdown', async ({ page }) => {

  const transloaderLogPage = new TransloaderLogPage(page);

    await transloaderLogPage.clickStatusDropdown();

    await transloaderLogPage.selectStatus('SUCCESS');

    await transloaderLogPage.clickSearch();

});



// TC_08 click on the view icon button and verify the details of the record are displayed in the modal window

test('TC_08 Verify View Icon button', async ({ page }) => {

    const transloaderLogPage = new TransloaderLogPage(page);

    await transloaderLogPage.searchContainerNumber
    ('MSNU2867351');

    await transloaderLogPage.clickSearch();

    await transloaderLogPage.clickViewIcon();

});



