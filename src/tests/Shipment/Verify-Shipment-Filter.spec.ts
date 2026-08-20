import { test, expect } from '../../fixtures/baseFixture';
import { ShipmentPage } from '../../pages/ShipmentPage';

test.beforeEach(async ({ page }) => {

  const shipmentPage = new ShipmentPage(page);

  await page.goto(
    'https://apps.trisysit.com/cgi/dashboard'
  );

  await shipmentPage.clickShipmentPage();

});

// Verify Shipment page open

test('TC_01 Verify Shipment Page Opens', async ({ page }) => {

  const shipmentPage = new ShipmentPage(page);

  await shipmentPage.clickShipmentPage();

  await shipmentPage.wait(5);

});


// Verify Contract fiter 

test('TC_03 Search Container Number', async ({page}) =>{

const shipmentPage = new ShipmentPage(page);

await shipmentPage.searchContract('1046919');

await shipmentPage.clickSearch();

});


// Verify Ship To filter

test('Test_03 Search Ship To Number', async ({page}) => {

    const shipmentPage = new ShipmentPage(page);

    await shipmentPage.searchShipTo('10342');

    await shipmentPage.clickSearch();
})

