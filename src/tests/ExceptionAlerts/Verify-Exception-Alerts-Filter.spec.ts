import { test, expect } from '../../fixtures/baseFixture';
import { ExceptionAlertsPage } from '../../pages/ExceptionAlertsPage';

test.beforeEach(async ({ page }) => {

  const exceptionAlertsPage =
    new ExceptionAlertsPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await exceptionAlertsPage.clickExceptionAlerts();

});


// Verify Exception & Alerts page open

test('TC_01_Verify Transloader Log Page Opens', async ({ page }) => {

  const exceptionAlertsPage = new ExceptionAlertsPage(page);

  await exceptionAlertsPage.clickExceptionAlerts();

  await page.close();

});


// Click Transloader Log

test('TC_02_Click Transloader Log inside the ExceptionAlerts Page', async({ page }) => {

  const exceptionAlertsPage = new ExceptionAlertsPage(page);

  await exceptionAlertsPage.selectTransloaderlog();

});


// Click Enriched Data

test('TC_03 Click Enriched Data inside the Enriched Data' , async({ page }) => {

  const exceptionAlertsPage = new ExceptionAlertsPage(page);

  await exceptionAlertsPage.selectEnrichedData();

});


// Search Transloader 

test(
  'TC_04_Click on each transloader and verify the selected value is displayed in the dropdown',
  async ({ page }) => {

    const exceptionAlertsPage =
      new ExceptionAlertsPage(page);

    const transloaders = [
      'LSI',
      'WTC Group',
      'Columbia Container',
      'Seaboard',
      'RayMont'
    ];

    for (const transloader of transloaders) {

      await exceptionAlertsPage.selectTransloader(transloader);

      await exceptionAlertsPage.wait(2);

      await exceptionAlertsPage.clickSearch();

      await exceptionAlertsPage.wait(2);

      expect(
        await exceptionAlertsPage.getSelectedTransloader()
      ).toContain(transloader);

      await exceptionAlertsPage.wait(2);

    }
  });


  // Search Booking ID

  test('TC_05 Seach Booking Id ', async({ page }) => {

    const exceptionAlertsPage = new ExceptionAlertsPage(page);

    exceptionAlertsPage.searchBookingId('193CA0768445');

    exceptionAlertsPage.clickSearch();


  });


  // Search Container Number 

  test('TC_06 Search Container Number', async ({ page }) => {

    const exceptionAlertsPage = new ExceptionAlertsPage(page);

    exceptionAlertsPage.searchContainerNumber('TGBU375917-2');

    exceptionAlertsPage.clickSearch();

  });


  // Search Status 

  test('TC_07 Search Status dropdown', async ({ page })=>{

    const exceptionAlertsPage = new ExceptionAlertsPage(page);

    exceptionAlertsPage.clickStatusDropdown();

    await page.getByRole('option', { name: 'EXCEPTION' }).click();
await exceptionAlertsPage.wait(5);

    exceptionAlertsPage.clickSearch();

    exceptionAlertsPage.searchContainerNumber('TGBU375917-2');

    exceptionAlertsPage.clickSearch();

  });