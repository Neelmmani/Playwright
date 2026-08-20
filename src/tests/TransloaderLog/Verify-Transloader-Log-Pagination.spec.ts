import { test, expect } from '../../fixtures/baseFixture';
import { TransloaderLogPage } from '../../pages/TransloaderLogPage';

test.beforeEach(async ({ page }) => {

  const transloaderLogPage = new TransloaderLogPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await transloaderLogPage.clickTransloaderLog();

});

test('TC_01 Verify pagination size options',
async ({ page }) => {

  const transloaderLogPage =
    new TransloaderLogPage(page);

  const pageSizes = [
    '10',
    '20',
    '50',
    '100'
  ];

  for (const size of pageSizes) {

    await transloaderLogPage
      .selectPageSize(size);

    await transloaderLogPage
      .wait(1);

  }

});


test('TC_02 Verify page navigation',
async ({ page }) => {

  const transloaderLogPage =
    new TransloaderLogPage(page);

  const totalPages =
    await transloaderLogPage
      .getTotalPages();

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    await transloaderLogPage
      .clickPageNumber(
        i.toString()
      );

    await transloaderLogPage
      .wait(2);

  }

});


test('TC_03 Verify page indicator',
async ({ page }) => {

  const transloaderLogPage =
    new TransloaderLogPage(page);

  const indicator =
    await transloaderLogPage
      .getPageIndicator();

  expect(indicator)
    .toContain('Page');

});


test('TC_04 Verify last page navigation',
async ({ page }) => {

  const transloaderLogPage =
    new TransloaderLogPage(page);

  const totalPages =
    await transloaderLogPage
      .getTotalPages();

  await transloaderLogPage
    .clickPageNumber(
      totalPages.toString()
    );

  const indicator =
    await transloaderLogPage
      .getPageIndicator();

  expect(indicator)
    .toContain(
      `Page ${totalPages}`
    );

});
