Feature: OrangeHRM Demo site
Scenario: Visiting the Login Page
Given I visit OrangeHRM site
When I enter username
When I enter password
When I enter submit button
Then I verify the Dashboard text in dashboard