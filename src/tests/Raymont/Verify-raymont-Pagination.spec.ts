import { test, expect } from '../../fixtures/baseFixture';
import { RaymontPage } from '../../pages/RaymontPage';

test.beforeEach(async ({ page }) => {

  const raymontpage = new RaymontPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await raymontpage.clickRaymontmenu();

});

test('TC_01 Verify pagination size options',
async ({ page }) => {

  const raymontPage =
    new RaymontPage(page);

  const pageSizes = [
    '10',
    '20',
    '50',
    '100'
  ];

  for (const size of pageSizes) {

    await raymontPage
      .selectPageSize(size);

    await raymontPage
      .wait(1);

  }

});


test('TC_02 Verify page navigation',
async ({ page }) => {

  const raymontPage =
    new RaymontPage(page);

  const totalPages =
    await raymontPage
      .getTotalPages();

  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    await raymontPage
      .clickPageNumber(
        i.toString()
      );

    await raymontPage
      .wait(2);

  }

});


test('TC_03 Verify page indicator',
async ({ page }) => {

  const raymontPage =
    new RaymontPage(page);

  const indicator =
    await raymontPage
      .getPageIndicator();

  expect(indicator)
    .toContain('Page');

});


test('TC_04 Verify last page navigation',
async ({ page }) => {

  const raymontPage =
    new RaymontPage(page);

  const totalPages =
    await raymontPage
      .getTotalPages();

  await raymontPage
    .clickPageNumber(
      totalPages.toString()
    );

  const indicator =
    await raymontPage
      .getPageIndicator();

  expect(indicator)
    .toContain(
      `Page ${totalPages}`
    );

});