import * as base from '../lib/base' 

class claimsPage{
    elements={
        claimMenuElement:':nth-child(11) > .oxd-main-menu-item > .oxd-text',
        assignClaimsBtn:'.orangehrm-header-container > .oxd-button',
        employeeNameCol:'.oxd-autocomplete-text-input > input'
    }

    clickMenuItemClaims(){
        base.clickOnElement(this.elements.claimMenuElement);
    }

    clickAssignClaimsBtn(){
        base.clickOnElement(this.elements.assignClaimsBtn);
    }

    clickOnEmpNameCol(){
        base.provideTextInput(this.elements.employeeNameCol,'a');
    }
}
export default claimsPage;