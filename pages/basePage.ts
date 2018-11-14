import {browser, by, element, ExpectedConditions, ElementFinder} from 'protractor';
 export class BasePage {
    
    /**
     * Method to clear and type text.
     * @param element element finder.
     * @param text the element text to set.
     */
    clearAndType(element: ElementFinder, text:string) {
        element.clear();
        element.sendKeys(text);
    }

    waitForElementToBeClickable(element: ElementFinder, timeout: number = 30000){
        //console.log('wait for element to be clickable: '+element.getWebElement())
        browser.wait(ExpectedConditions.elementToBeClickable(element), timeout);
    }

    waitForElementToBeVisible(element: ElementFinder, timeout: number = 30000){
        //console.log('wait for element to be visible: '+element.getWebElement());
        browser.wait(ExpectedConditions.visibilityOf(element), timeout);
    }

    elementDisplayed(element: ElementFinder): any {
        var elementDisplayed;
        try{
            elementDisplayed = element.isDisplayed().then((value: any)=>{
                return value;
            })
        } catch(err) {
            console.error('Element is not displayed: '+err.message);
        }
        return elementDisplayed;
    }

    isAlertPresent(): boolean {
        try {
            console.log('Wait for alert to present.');
            browser.wait(ExpectedConditions.alertIsPresent(), 5000);
            return true;
        } catch(err){
            console.error('Alert is not present: '+err.message);
            return false;
        }
    }

    elementSelected(element: ElementFinder): any {
        var elementSelected;
        try {
            elementSelected = element.isSelected().then((value: any) => {
                return value;
            });
        } catch(err){
            console.error('element is not visible: '+err.message);
        }
        return elementSelected;
    }
 }