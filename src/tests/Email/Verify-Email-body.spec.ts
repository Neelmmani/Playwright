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

  await emailPage.openEmailRecord(0);
  
});



// TC_02 Download Attachment



test('TC_02 Download Attachment', async ({ page }) => {

  const emailPage = new EmailPage(page);

  await emailPage.searchBookingId(
    '193CA0927960'
  );

  await emailPage.clickSearch();

  await emailPage.openEmailRecord(0);


  const download =
    await emailPage.downloadAttachment();

  expect(download).toBeTruthy();

});


// TC_03_Download only xlsx attachment

test('TC_03 Verify CSV/XLSX attachment can be downloaded',
async ({ page }) => {

  const emailPage = new EmailPage(page);

  for (let i = 0; i < 10; i++) {

  await emailPage.openEmailRecord(i);

  const fileName =
    await emailPage.getAttachmentFileName();

  if (
    fileName?.toLowerCase().match(/\.(csv|xlsx)$/)
  ) {

    const download =
      await emailPage.downloadAttachment();

    expect(download).toBeTruthy();

    break;
  }
}
});