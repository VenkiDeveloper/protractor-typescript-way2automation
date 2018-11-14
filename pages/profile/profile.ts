import { element, by, $ } from "protractor";
import { BasePage } from "../basePage";

export class ProfilePage extends BasePage {
    name = element(by.model('formData.name'));
    email = element(by.model('formData.email'));
    nextSectionBtn = $(".btn-info");

    setName(name: string) {
        this.waitForElementToBeClickable(this.name);
        this.clearAndType(this.name, name);
    }

    setEmail(email: string) {
        this.waitForElementToBeClickable(this.email);
        this.clearAndType(this.email, email);
    }

    clickNextSectionButton(){
        this.waitForElementToBeClickable(this.nextSectionBtn);
        this.nextSectionBtn.click();
    }

    checkResult(nameValue: string, emailValue: string): any {
        var model ="//pre[contains(text(),'{\"name\":\"venky\",\"email\":\"abc@abc.com\"}')]";
        var result = element(by.xpath(model));
        this.waitForElementToBeVisible(result);
        return this.elementDisplayed(result).then((value:any) => {
            console.log('Is Result text present: '+value);
            return value;
        });
    }
}