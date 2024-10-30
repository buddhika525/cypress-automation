export function openURL(url){
    cy.visit(url);
}

export function provideTextInput(element, name){
    cy.get(element).type(name);
}

export function clickOnElement(element){
    cy.get(element).click();
}

export function verifyElementText(element, text){
    cy.get(element).should('have.text', text);
}