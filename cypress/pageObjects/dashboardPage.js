class dashboardPage{
    elements={
        dashboardMenuText:()=>cy.get('.oxd-topbar-header-title')
    }

    verifyDasboardText(text){
        this.elements.dashboardMenuText().should('have.text','Dashboard')
    }
}
export default dashboardPage;