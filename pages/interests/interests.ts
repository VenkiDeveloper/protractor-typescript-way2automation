import { element, by, $ } from "protractor";
import { BasePage } from "../basePage";
 export class InterestsPage extends BasePage {
     xboxConsoleOfChoice = element(by.model("formData.type"));
     nextSectionBtn = $(".btn-info");

    selectXboxConsoleOfChoice() {
        this.waitForElementToBeClickable(this.xboxConsoleOfChoice);
        this.xboxConsoleOfChoice.click();
     }

     clickNextSectionButton(){
        this.waitForElementToBeClickable(this.nextSectionBtn);
        this.nextSectionBtn.click();
    }

    checkResult(name: string, email: string, type: string): any {
        var model ="//pre[contains(text(),'{\"name\":\"venky\",\"email\":\"abc@abc.com\",\"type\":\"xbox\"}')]";
        var result = element(by.xpath(model));
        this.waitForElementToBeVisible(result);
        return this.elementDisplayed(result).then((value:any) => {
            console.log('Is Result text present: '+value);
            return value;
        });
    }
 }