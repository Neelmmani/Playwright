import { test, expect } from '../../fixtures/baseFixture';
import { EnrichedDataPage } from '../../pages/EnricheddataPage';

test.beforeEach(async ({ page }) => {

  const enrichedDataPage = new EnrichedDataPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await enrichedDataPage.clickEnrichedData();

});

test('TC_01 Verify pagination size options',
async ({ page }) => {

  const enrichedDataPage =
    new EnrichedDataPage(page);

  const pageSizes = [
    '10',
    '20',
    '50',
    '100'
  ];

  for (const size of pageSizes) {

    await enrichedDataPage
      .selectPageSize(size);

    await enrichedDataPage
      .wait(1);

  }

});


test('TC_02 Verify page navigation',
async ({ page }) => {

  const enrichedDataPage =
    new EnrichedDataPage(page);

  const totalPages =
    await enrichedDataPage
      .getTotalPages();

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    await enrichedDataPage
      .clickPageNumber(
        i.toString()
      );

    await enrichedDataPage
      .wait(2);

  }

});


test('TC_03 Verify page indicator',
async ({ page }) => {

  const enrichedDataPage =
    new EnrichedDataPage(page);

  const indicator =
    await enrichedDataPage
      .getPageIndicator();

  expect(indicator)
    .toContain('Page');

});


test('TC_04 Verify last page navigation',
async ({ page }) => {

  const enrichedDataPage =
    new EnrichedDataPage(page);

  const totalPages =
    await enrichedDataPage
      .getTotalPages();

  await enrichedDataPage
    .clickPageNumber(
      totalPages.toString()
    );

  const indicator =
    await enrichedDataPage
      .getPageIndicator();

  expect(indicator)
    .toContain(
      `Page ${totalPages}`
    );

});