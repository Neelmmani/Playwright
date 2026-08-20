import { test, expect } from '../../fixtures/baseFixture';
import { TransloaderUpdatePage } from '../../pages/TransloaderUpdatePage';

test.beforeEach(async ({ page }) => {

  const transloaderUpdatePage = new TransloaderUpdatePage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await transloaderUpdatePage.clickTransloaderUpdate();

});

test('TC_01 Verify pagination size options',
async ({ page }) => {

  const transloaderUpdatePage =
    new TransloaderUpdatePage(page);

  const pageSizes = [
    '10',
    '20',
    '50',
    '100'
  ];

  for (const size of pageSizes) {

    await transloaderUpdatePage
      .selectPageSize(size);

    await transloaderUpdatePage
      .wait(1);

  }

});


test('TC_02 Verify page navigation',
async ({ page }) => {

  const transloaderUpdatePage =
    new TransloaderUpdatePage(page);

  const totalPages =
    await transloaderUpdatePage
      .getTotalPages();

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    await transloaderUpdatePage
      .clickPageNumber(
        i.toString()
      );

    await transloaderUpdatePage
      .wait(2);

  }

});


test('TC_03 Verify page indicator',
async ({ page }) => {

  const transloaderUpdatePage =
    new TransloaderUpdatePage(page);

  const indicator =
    await transloaderUpdatePage
      .getPageIndicator();

  expect(indicator)
    .toContain('Page');

});


test('TC_04 Verify last page navigation',
async ({ page }) => {

  const transloaderUpdatePage =
    new TransloaderUpdatePage(page);

  const totalPages =
    await transloaderUpdatePage
      .getTotalPages();

  await transloaderUpdatePage
    .clickPageNumber(
      totalPages.toString()
    );

  const indicator =
    await transloaderUpdatePage
      .getPageIndicator();

  expect(indicator)
    .toContain(
      `Page ${totalPages}`
    );

});
