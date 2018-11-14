import { ProfilePage } from "./../../pages/profile/profile";
import { InterestsPage } from "./../../pages/interests/interests";
import { PaymentPage } from "./../../pages/payment/payment";
import { browser } from "protractor";

describe('Verify Multiform functionalities', function() {
    let profilePage = new ProfilePage();
    let interestsPage = new InterestsPage();
    let paymentPage = new PaymentPage();

    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/multiform');
    });

    it('should perform multiform actions', function() {
        console.log('Set username.');
        profilePage.setName('venky');

        console.log('Set email');
        profilePage.setEmail('abc@abc.com');

        console.log('Verify name and email present in binding.');
        var result = profilePage.checkResult('venky','abc@abc.com');
        expect(result).toBe(true);

        console.log('Click Next section button.');
        profilePage.clickNextSectionButton();
        
        console.log('Select Xbox console of choice.');
        interestsPage.selectXboxConsoleOfChoice();

        console.log('Verify selected console choice present in binding.');
        var result2 = interestsPage.checkResult('venky','abc@abc.com','ps');
        expect(result2).toBe(true);

        console.log('Click Next section button.');
        interestsPage.clickNextSectionButton();

        console.log('Check Test completed text present on payment page.');
        var isTestCompletedTextPresent = paymentPage.isTestCompletedTextPresent();

        console.log('Verify Test completed text present on payment page.');
        expect(isTestCompletedTextPresent).toBe(true, "actual value not matched with expected.");

        console.log('Click submit button.');
        paymentPage.clickSubmitBtn();

        console.log('Click OK button on alert.');
        paymentPage.acceptAlert();
    });

    // afterEach(()=> {
    //     browser.close();
    // });

});
