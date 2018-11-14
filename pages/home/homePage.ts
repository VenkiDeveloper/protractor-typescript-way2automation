import { by, element } from "protractor";
import { BasePage } from "./../basePage";

export class HomePage extends BasePage {
    loggedInText = element(by.xpath("//p[contains(text(),'logged in')]"));
    logoutLink = element(by.linkText('Logout'));

    clickLogoutButton():void {
        this.waitForElementToBeClickable(this.logoutLink);
        this.logoutLink.click();
    }

    isLogoutLinkDisplayed(): any {
        this.waitForElementToBeClickable(this.logoutLink);
        var isLogoutLinkDisplayed = this.elementDisplayed(this.logoutLink).then((text: any) => {
            console.log('Is Logout link displayed: '+text);
            return text;
        });
        return isLogoutLinkDisplayed;
    }

    isLoggedInTextPresent(): any {
        this.waitForElementToBeVisible(this.loggedInText);
        var isLoggedInTextPresent = this.elementDisplayed(this.loggedInText).then((text: any) => {
            console.log('Is Logged in text present: '+text);
            return text;
        });
        return isLoggedInTextPresent;
    }
}