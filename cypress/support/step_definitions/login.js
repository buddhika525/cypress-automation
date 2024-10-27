const{Given,When,Then} = require("@badeball/cypress-cucumber-preprocessor");
import loginPage from '../../pageObjects/loginPage'
import dashboardPage from '../../pageObjects/dashboardPage';
//import logger from '../../utils/logging'

const LoginPage = new loginPage()
const DashboardPage = new dashboardPage()

Given('I visit OrangeHRM site',()=>{
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     //cy.task('getLogger', {log_file: './logs/log.log', log_level: 'info'});
     //cy.task('logInfo', 'sample log');
     //logger.info('Logging an info message');
})

When('I enter username',()=>{
    LoginPage.enterUsername('Admin')
})

When('I enter password',()=>{
    LoginPage.enterPassword('admin123')
})

When('I enter submit button',()=>{
    LoginPage.enterLoginBtn()
})

Then('I verify the Dashboard text in dashboard', ()=>{
    DashboardPage.verifyDasboardText('Dashboard')
})