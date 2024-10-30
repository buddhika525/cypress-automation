
import * as base from '../lib/base' 

class claimsPage{
    elements={
        claimMenuElement:':nth-child(11) > .oxd-main-menu-item > .oxd-text',
        assignClaimsBtn:'.orangehrm-header-container > .oxd-button',
        employeeNameCol:'.oxd-autocomplete-text-input > input',
        eventNameDropDown:':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
        currencyDropDown:':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
        createBtn:'.oxd-button--secondary'
    }

    clickMenuItemClaims(){
        base.clickOnElement(this.elements.claimMenuElement);
    }

    clickAssignClaimsBtn(){
        base.clickOnElement(this.elements.assignClaimsBtn);
    }

    clickOnEmpNameCol(){
        base.provideTextInput(this.elements.employeeNameCol,'a');
        cy.wait(5000);
        cy.get("div[role='option']").each(function($ele, index, $list){
            if($ele.text().includes("Ranga  Akunuri")){
                cy.wrap($ele).click();
            }
            else{
                cy.log($ele.text());
            }
        })
        
    }

    clickOnEventDropDown(){
        base.clickOnElement(this.elements.eventNameDropDown);
        cy.get("div[role='option']").each(function($ele, index, $list){
            if($ele.text().includes("Medical Reimbursement")){
                cy.wrap($ele).click();
            }
            else{
                cy.log($ele.text());
            }
        })
    }

    clickOnCurrencyDropDown(){
        base.clickOnElement(this.elements.currencyDropDown);
        cy.get("div[role='option']").each(function($ele, index, $list){
            if($ele.text().includes("Euro")){
                cy.wrap($ele).click();
            }
            else{
                cy.log($ele.text());
            }
        })
    }

    clickCreateBtn(){
        base.clickOnElement(this.elements.createBtn);
    }
}
export default claimsPage;