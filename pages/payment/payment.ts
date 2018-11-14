import { element, by, browser, $ } from "protractor";
import { BasePage } from "../basePage";

export class PaymentPage extends BasePage {
    testCompleted = element(by.xpath("//h3[text()='Test Completed, WooHoo!']"));
    submitBtn = $(".btn-danger");

    clickSubmitBtn(){
        this.waitForElementToBeClickable(this.submitBtn);
        this.submitBtn.click();
    }

    isTestCompletedTextPresent():any {
        this.waitForElementToBeVisible(this.testCompleted);
        return this.elementDisplayed(this.testCompleted).then((text:any) => {
            console.log('Is Test completed text present: '+text);
            return text;
        });
    }

    acceptAlert(){
        console.log('Is alert present: '+this.isAlertPresent());
        if(this.isAlertPresent()){
            console.log('Accept the alert.')
            browser.switchTo().alert().accept();
        }
    }
}