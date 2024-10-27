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

When("user selects 'Sandra  Abbott' as the employee name", ()=>{
    claimspage.clickOnEmpNameCol();
    
})

