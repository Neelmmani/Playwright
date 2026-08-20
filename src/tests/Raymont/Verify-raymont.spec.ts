import { test, expect } from '../../fixtures/baseFixture';
import { RaymontPage } from '../../pages/RaymontPage';

test.beforeEach(async ({ page }) => {

  const raymontpage = new RaymontPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await raymontpage.clickRaymontmenu();

});

// TC_01 Verify Raymont menu page open

test('TC_01 Verify Raymont menu page Open' , async ({page}) => {

const raymontPage = new RaymontPage(page);

await raymontPage.clickRaymontmenu();

await raymontPage.wait(5);

});


// TC_02 Verify Booking number 

test ('TC_02 verify Booking Number ' , async ({page}) => {

    const raymontPage = new RaymontPage(page);

    await raymontPage.searchBookingId('15913200');

    await raymontPage.clickSearch();

});


// Tc_03 Verify Status Dropdown

const Statuses = [
'OPEN',
'CLOSED'
];

for (const status of Statuses){

test (`TC_03 Verify ${status} Status`, async ({page}) => {

    const raymontPage = new RaymontPage(page);

    await raymontPage.clickStatusDropdown();

    await raymontPage.selectStatus(status);

    await raymontPage.clickSearch();


});

}


// Verify PDF Download

test ('TC_04 verify PDF Download ' , async ({page}) => {

    const raymontPage = new RaymontPage(page);

    await raymontPage.searchBookingId('15913200');

    await raymontPage.clickSearch();

    await raymontPage.clickPdfdownload();

});



// Verify ExcelSheet Download

test ('TC_05 verify Excel Data Sheet Download ' , async ({page}) => {

    const raymontPage = new RaymontPage(page);

    await raymontPage.searchBookingId('15913200');

    await raymontPage.clickSearch();

    await raymontPage.clickDownloadExcel();

});