import { browser } from "protractor";
import { CheckboxPage } from "../../pages/checkboxes/checkboxPage";

describe('Verify checkbox functionalities.', () => {
    let checkboxPage = new CheckboxPage();

    beforeEach(() =>{
        browser.get('http://www.way2automation.com/angularjs-protractor/checkboxes/');
    });

    it('Should checkbox have value.', () => {
        console.log('Check Store checkbox selected by deafult.');
        var isStoreCheckboxSelected = checkboxPage.isStoreCheckboxSelected();

        console.log('Verify Store checkbox selected by deafult.');
        expect(isStoreCheckboxSelected).toBe(false);

        console.log('Check Hammer checkbox disabled by deafult.');
        var isHammerCheckboxSelected = checkboxPage.isHammerCheckboxSelected();

        console.log('Verify Hammer checkbox disabled by deafult.');
        expect(isHammerCheckboxSelected).toBe(false);

        console.log('Check Screwdriver checkbox de-selected by deafult.');
        var isScrewdriverCheckboxSelected = checkboxPage.isScrewdriverCheckboxSelected();

        console.log('Verify Screwdriver checkbox de-selected by deafult.');
        expect(isScrewdriverCheckboxSelected).toBe(false);
        
        console.log('Click Screwdriver checkbox,');
        checkboxPage.clickScrewdriverCheckbox();
        
        console.log('Check Screwdriver checkbox is selected.');
        var isScrewdriverCheckboxSelected = checkboxPage.isScrewdriverCheckboxSelected();

        console.log('Verify Screwdriver checkbox is selected.');
        expect(isScrewdriverCheckboxSelected).toBe(true);
    });

    // afterEach(() => {
    //     browser.close();
    // })
});