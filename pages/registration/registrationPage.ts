import { by, element, $ } from "protractor";
import { BasePage } from "./../basePage";

export class RegistrationPage extends BasePage {
    userName = element(by.model('Auth.user.name'));
    password = element(by.model('Auth.user.password'));
    userNameDesc = element(by.model('model[options.key]'));
    loginBtn = $(".btn-danger");

    setUserName(userName: string): void{
        this.waitForElementToBeClickable(this.userName);
        this.clearAndType(this.userName, userName);
    }

    setPassword(password: string):void {
        this.waitForElementToBeClickable(this.password);
        this.clearAndType(this.password,password);
    }

    setUserNameDescription(userNameDesc: string):void {
        this.waitForElementToBeClickable(this.userNameDesc);
        this.clearAndType(this.userNameDesc, userNameDesc);
    }

    clickLoginButton(): void{
        this.waitForElementToBeClickable(this.loginBtn);
        this.loginBtn.click();
    }

    isUserNameTextboxVisible(): any {
        var isUserNameTextboxVisible= this.elementDisplayed(this.userName).then((text: any) => {
            console.log('Is UserName textbox visible: '+text);
            return text;
        });
        return isUserNameTextboxVisible;
    }

}