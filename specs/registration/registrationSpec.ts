import { RegistrationPage } from "./../../pages/registration/registrationPage";
import { HomePage } from "./../../pages/home/homePage";
import { browser } from "protractor";

describe('Verify Registation functionality', function() {
    let registrationPage =  new RegistrationPage();
    let homePage = new HomePage();
    beforeEach(() => {
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    });

    it('Should user able to register.',  function() {
        console.log('Set username.');
        registrationPage.setUserName('angular');

        console.log('Set password.');
        registrationPage.setPassword('password');
        
        console.log('Set username description.');
        registrationPage.setUserNameDescription('Welcome to Protractor.');

        console.log('Click on Login button.');
        registrationPage.clickLoginButton();

        var isLoggedInTextPresent = homePage.isLoggedInTextPresent();
        console.log('Verify Logged in text is displayed.');
        
        expect(isLoggedInTextPresent).toBe(true);

        var isLogoutLinkDisplayed = homePage.isLogoutLinkDisplayed();
        console.log('Verify Logout link is displayed.');
        expect(isLogoutLinkDisplayed).toBe(true);

        console.log('Click on Logout link.');
        homePage.clickLogoutButton();

        var isUserNameTextboxVisible = registrationPage.isUserNameTextboxVisible();
        console.log('Verify registration page is displayed.');
        expect(isUserNameTextboxVisible).toBe(true);

    });

    // afterAll(() => {
    //     browser.close();
    // });

});