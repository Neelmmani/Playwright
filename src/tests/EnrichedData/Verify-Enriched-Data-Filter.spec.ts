import { test, expect } from '../../fixtures/baseFixture';
import {EnrichedDataPage } from '../../pages/EnricheddataPage';

test.beforeEach(async ({ page }) => {

  const enrichedDataPage = new EnrichedDataPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await enrichedDataPage.clickEnrichedData();

});

// Verify Enriched Data page open

test('TC_01_Verify Transloader Update Page Opens', async ({ page }) => {

  const enrichedDataPage = new EnrichedDataPage(page);

  await enrichedDataPage.clickEnrichedData();


});

// Verify Booking ID 

test('TC_02 Search Booking ID', async ({ page }) => {

  const enrichedDataPage = new EnrichedDataPage(page);

  await enrichedDataPage.searchBookingId(
    'EBKG14712295'
  );

  await enrichedDataPage.clickSearch();

});

// Verify the Status Dropdown 
const statuses = [
  'EXCEPTION',
  'OPEN',
  'APPROVED',
  'COMPLETED'
];

for (const status of statuses) {

  test(`TC_03 Verify ${status} Status Dropdown`, async ({ page }) => {

    const enrichedDataPage =
      new EnrichedDataPage(page);

    await enrichedDataPage.clickStatusDropdown();

    await enrichedDataPage.selectStatus(status);

    await enrichedDataPage.clickSearch();
  });
}

// verify Edit Icon 

test('TC_04 Verify Edit Icon' , async({ page }) => {

    const enrichedDataPage = new EnrichedDataPage(page);

    await enrichedDataPage.clickExceptionStatus();

    await enrichedDataPage.searchBookingId('9887654');

    await enrichedDataPage.clickSearch();

    await enrichedDataPage.clickEditIcon();

    await enrichedDataPage.wait(5);

});

// Verify View Icon


test('TC_05 Verify View Icon' , async({ page }) => {

    const enrichedDataPage = new EnrichedDataPage(page);

    await enrichedDataPage.clickExceptionStatus();

    await enrichedDataPage.searchBookingId('9887654');

    await enrichedDataPage.clickSearch();

    await enrichedDataPage.clickViewIcon();

    await enrichedDataPage.clickBackButton();

});

// Verify Delete Icon

test('TC_06 Verify Delete Icon' , async({page}) => {

const enrichedDataPage = new EnrichedDataPage(page);

await enrichedDataPage.clickExceptionStatus();

await enrichedDataPage.searchBookingId('NAM9457838');

await enrichedDataPage.clickSearch();

await enrichedDataPage.clickDeleteIcon();

await enrichedDataPage.confirmDeleteButton();

});


