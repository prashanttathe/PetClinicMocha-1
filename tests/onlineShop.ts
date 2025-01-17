import { browser } from "protractor";
import { onlineShopPage } from "../pageObjects/onlineShopPage";
import { homePage } from "../pageObjects/homePage";

let expect = require('chai').expect;
let onlineShop = new onlineShopPage();
let home = new homePage();
declare const allure: any;

describe('Verify user is able to navigate to online shop page', function () {

    it('Should be able to navigate to online shop page', async function () {
        await home.clickOnlineShopMenu();
    });

    afterEach(async function () {
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    })

});

xdescribe('Testing New Screen-Shop online', function () {

    /*it('Should be able to navigate to online shop page', async function () {
        await home.clickOnlineShopMenu();
    });*/

    xit('Verify titles Food and Treats on shop online screen', async function () {
        expect(await onlineShop.getFoodTitleText()).to.equal("Food");
        expect(await onlineShop.getTreatsTitleText()).to.equal("Treats");

    });

    xit('Validate the item names & rates are displayed in Foods', async function () {
        expect(await onlineShop.getFirstFoodItemTitleText()).to.equal("Digestive Care- Dog Food");
        expect(await onlineShop.getSecondFoodItemTitleText()).to.equal("Low Fat- Dog Food");
        expect(await onlineShop.getThirdFoodItemTitleText()).to.equal("Digestive Care- Cat Food");
        expect(await onlineShop.getFourthFoodItemTitleText()).to.equal("Low Fat- Cat Food");
    });

    xit('Validate the item names & rates are displayed in Treats', async function () {
        expect(await onlineShop.getFirstTreatsItemTitleText()).to.equal("Hydrolyzed Protein Canine Treats");
        expect(await onlineShop.getSecondTreatsItemTitleText()).to.equal("Organic Baked Dog Treats");
        expect(await onlineShop.getThirdTreatsItemTitleText()).to.equal("Freeze-Dried SINGLES Pet Treats");
        expect(await onlineShop.getFourthTreatsItemTitleText()).to.equal("Gastrointestinal Feline Treats");
    });

    afterEach(async function () {
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    })

});

xdescribe('Quantity and Add to cart button', function () {

    it('Validate dropdown labeled as quantity and check default quantity should be one', async function () {
        await expect(await onlineShop.getQuantityText()).to.equal("Quantity"); 
        await expect(await onlineShop.getQuantityValue()).to.equal(1); 
    });

    it('Validate quantity should allow maximum five items', async function () {
        await onlineShop.clickOnQuantity();
        await onlineShop.selectQuantityMaxValue();
        expect(await onlineShop.getQuantityMaxValueText()).to.equal(5);  
    });

    it('Verify the text of Add to Cart button', async function () {
        expect(await onlineShop.getAddToCartButtonText()).to.equal("Add to Cart");  
    });

    it('Verify pop up with text Adding to the Cart on clicking Add to Cart button', async function () {
        await onlineShop.clickOnAddToCartButton();
        expect(await onlineShop.getPopUpText()).to.equal("Adding to the Cart");  
    });

    it('Verify Cart menu is displaying the count of items', async function () {
       // await onlineShop.clickOnAddToCartButton();
        //expect(await onlineShop.getPopUpText()).to.equal("Adding to the Cart");  
    });

    it('Verify an error message while adding more than 6 items in to the cart', async function () {
        // await onlineShop.clickOnAddToCartButton();
         expect(await onlineShop.getErrorMessageText()).to.equal("You have exceed maximum limit. Please select maximum 6 items.");  
     });

    afterEach(async function () {
        const png = await browser.takeScreenshot();
        allure.createAttachment('Screenshot', new Buffer(png, 'base64'), 'image/png');
    })


});