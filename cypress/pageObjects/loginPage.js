import * as base from '../lib/base.js';

class loginPage{
    elements={
        /*
        usernameInput :() => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        passwordInput:()=>cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'),
        loginButton:()=>cy.get('.oxd-button')*/

        usernameInput:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
        passwordInput : ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
        loginButton : '.oxd-button'

    }

    enterUsername(username){
        //this.elements.usernameInput().type(username)
        base.provideTextInput(this.elements.usernameInput,username)
    }

    enterPassword(password){
        //this.elements.passwordInput().type(password)
        base.provideTextInput(this.elements.passwordInput,password)
    }

    enterLoginBtn(){
        //this.elements.loginButton().click()
        base.clickOnElement(this.elements.loginButton)
    }

}
export default loginPage;