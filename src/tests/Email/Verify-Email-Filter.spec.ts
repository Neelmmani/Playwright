import { test, expect } from '../../fixtures/baseFixture';
import { EmailPage } from '../../pages/EmailPage';

test.beforeEach(async ({ page }) => {

  const emailPage = new EmailPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await emailPage.clickEmailMenu();

});


// TC_01_Verify Email Page Opens



test('TC_01_Verify Email Page Opens', async ({ page }) => {

  const emailPage = new EmailPage(page);

  await emailPage.clickEmailMenu();

  await page.close();

});



// TC_02_Click on each transloader and verify the selected value is displayed in the dropdown



test(
  'TC_02_Click on each transloader and verify the selected value is displayed in the dropdown',
  async ({ page }) => {

    const emailPage =
      new EmailPage(page);

    const transloaders = [
      'LSI',
      'WTC Group',
      'Columbia Container',
      'Seaboard'
    ];

    for (const transloader of transloaders) {

      await emailPage.selectTransloader(transloader);

      await emailPage.clickSearch();

      expect(
        await emailPage.getSelectedTransloader()
      ).toContain(transloader);

    }
  }
);


// TC_03 Search Booking ID



test('TC_03 Search Booking ID', async ({ page }) => {

  const emailPage = new EmailPage(page);

  await emailPage.searchBookingId(
    '193CA0927960'
  );

  await emailPage.clickSearch();

});


// TC_04 Verify Email Date Filter



test ('TC_04 Verify Email Date Filter', async ({ page }) => {

  const emailPage = new EmailPage(page);  

const fromDate = '05/01/2026';
const toDate = '07/01/2026';

await emailPage.enterFromDate(fromDate);
await emailPage.enterToDate(toDate);

await emailPage.clickSearch();

});



// TC_05_Click on Extracted button and verify the values are displayed in the table



test ('TC_05 Verify Extracted Email values', async ({ page }) => {

  const emailPage = new EmailPage(page);   

  await emailPage.clickExtractedButton();

  await emailPage.clickSearch();

});


// TC_06 Verify Invalid Date range filter

test('TC_06 Verify Invalid Date range filter', async ({ page }) => {

  const emailPage = new EmailPage(page);

  await emailPage.enterFromDate('07/01/2026');
  await emailPage.enterToDate('05/01/2026');

  await emailPage.clickSearch();
});


// TC_07 Verify the attachment download for the LSI Transloader.
// TC_08 Verify the attachment download for the WTC Group Transloader.
// TC_09 Verify the attachment download for the Columbia Container Transloader.
// TC_10 Verify the attachment download for the Seaboard Transloader.