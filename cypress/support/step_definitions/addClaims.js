import { When } from "@badeball/cypress-cucumber-preprocessor";
import claimsPage from "../../pageObjects/claimsPage";

const claimspage = new claimsPage();

When('user clicks on claim menu', ()=>{
    claimspage.clickMenuItemClaims();
    //cy.wait(1000)
    //cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').click();
})

When('user clicks on Assign claims button', ()=>{
    claimspage.clickAssignClaimsBtn();
})

When("user selects 'Ranga  Akunuri' as the employee name", ()=>{
    claimspage.clickOnEmpNameCol();
    
})

When("user selects 'Medical Reimbursement' as Event",()=>{
    claimspage.clickOnEventDropDown();
})

When("user selects 'Euro' as Currency",()=>{
    claimspage.clickOnCurrencyDropDown();
})

When('User clicks on create button',()=>{
    claimspage.clickCreateBtn();
})

