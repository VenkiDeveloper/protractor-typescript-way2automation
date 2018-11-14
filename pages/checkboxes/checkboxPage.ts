import { element, by, browser } from "protractor";
import { BasePage } from "../basePage";

export class CheckboxPage extends BasePage {
    storeCheckbox = element(by.model('data.root'));
    hammerCheckbox = element(by.xpath("//h4[contains(text(), 'Hammer')]/input"));
    screwdriverCheckbox = element(by.xpath("//h4[contains(text(), 'Screwdriver')]/input"));

    isStoreCheckboxSelected(): any {
        this.waitForElementToBeClickable(this.storeCheckbox);
        return this.elementSelected(this.storeCheckbox).then((value: any) => {
            console.log('Is Store checkbox selected: '+value);
            return value;
        });
    }

    isHammerCheckboxSelected(): any {
        //this.waitForElementToBeClickable(this.hammerCheckbox);
        return this.elementSelected(this.hammerCheckbox).then((value: any) => {
            console.log('Is Hammer checkbox selected: '+value);
            return value;
        });
    }

    isScrewdriverCheckboxSelected(): any {
        this.waitForElementToBeClickable(this.screwdriverCheckbox);
        return this.elementSelected(this.screwdriverCheckbox).then((value: any) => {
            console.log('Is Screwdriver checkbox selected: '+value);
            return value;
        });
    }

    clickScrewdriverCheckbox() {
        this.waitForElementToBeClickable(this.screwdriverCheckbox);
        this.screwdriverCheckbox.click();
        // this.elementSelected(this.screwdriverCheckbox).then((value: any)=> {
        //     console.log('clickScrewdriverCheckbox() - Is Screwdriver checkbox selected: '+value);
        //     if(!value){
        //         this.screwdriverCheckbox.click();
        //     }
        // });
    }
}