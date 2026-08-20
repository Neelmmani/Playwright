import { test, expect } from '../../fixtures/baseFixture';
import { EmailPage } from '../../pages/EmailPage';

test.beforeEach(async ({ page }) => {

  const emailPage = new EmailPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await emailPage.clickEmailMenu();

});

test('TC_01 Verify pagination size options',
async ({ page }) => {

  const emailPage =
    new EmailPage(page);

  const pageSizes = [
    '10',
    '20',
    '40'
  ];

  for (const size of pageSizes) {

    await emailPage
      .selectPageSize(size);

    await emailPage
      .wait(1);

  }

});


test('TC_02 Verify page navigation',
async ({ page }) => {

  const emailPage =
    new EmailPage(page);

  const totalPages =
    await emailPage
      .getTotalPages();

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    await emailPage
      .clickPageNumber(
        i.toString()
      );

    await emailPage
      .wait(2);

  }

});


test('TC_03 Verify page indicator',
async ({ page }) => {

  const emailPage =
    new EmailPage(page);

  const indicator =
    await emailPage
      .getPageIndicator();

  expect(indicator)
    .toContain('Page');

});


test('TC_04 Verify last page navigation',
async ({ page }) => {

  const emailPage =
    new EmailPage(page);

  const totalPages =
    await emailPage
      .getTotalPages();

  await emailPage
    .clickPageNumber(
      totalPages.toString()
    );

  const indicator =
    await emailPage
      .getPageIndicator();

  expect(indicator)
    .toContain(
      `Page ${totalPages}`
    );

});
