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

test('TC_01 Verify pagination size options',
async ({ page }) => {

  const exceptionAlertsPage = new ExceptionAlertsPage(page);

  const pageSizes = [
    '10',
    '20',
    '50',
    '100'
  ];

  for (const size of pageSizes) {

    await exceptionAlertsPage
      .selectPageSize(size);

    await exceptionAlertsPage
      .wait(1);

  }

});


test('TC_02 Verify page navigation',
async ({ page }) => {

 const exceptionAlertsPage = new ExceptionAlertsPage(page);

  const totalPages =
    await exceptionAlertsPage
      .getTotalPages();

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    await exceptionAlertsPage
      .clickPageNumber(
        i.toString()
      );

    await exceptionAlertsPage
      .wait(2);

  }

});


test('TC_03 Verify page indicator',
async ({ page }) => {

const exceptionAlertsPage = new ExceptionAlertsPage(page);

  const indicator =
    await exceptionAlertsPage
      .getPageIndicator();

  expect(indicator)
    .toContain('Page');

});


test('TC_04 Verify last page navigation',
async ({ page }) => {

const exceptionAlertsPage = new ExceptionAlertsPage(page);

  const totalPages =
    await exceptionAlertsPage
      .getTotalPages();

  await exceptionAlertsPage
    .clickPageNumber(
      totalPages.toString()
    );

  const indicator =
    await exceptionAlertsPage
      .getPageIndicator();

  expect(indicator)
    .toContain(
      `Page ${totalPages}`
    );

});