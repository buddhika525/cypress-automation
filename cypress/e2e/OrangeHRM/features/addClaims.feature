Feature: Add Attendance

Scenario: Add attendance data
Given I visit OrangeHRM site
When I enter username
When I enter password
When I enter submit button
Then I verify the Dashboard text in dashboard
When user clicks on claim menu
When user clicks on Assign claims button
When user selects 'Sandra  Abbott' as the employee name
When user selects "Medical Reimbursement" as Event
When user selects "Euro" as Currency
When User clicks on create button
#Then User should be moved to "Assign Claim" page