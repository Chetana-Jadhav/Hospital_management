Feature: verify multiple scenarios with different users

  Scenario: Test Login for admin with Valid Credential
    Given Open chrome browser and Start Applciation
    When Selecting "admin" and I enter valid "admin@admin.com" and valid "admin"
    Then Click on login
    Then veryfy title
   

  Scenario: Test Login for with Valid Credential
    Given Open chrome browser and Start Applciation
    When Selecting "doctor" and I enter valid "doctor@doctor.com" and valid "doctor"
    Then Click on login
    Then verify dashboard title
    Then add patient
    Then verify title of patient page

  Scenario: Test Login for with Valid Credential
    Given Open chrome browser and Start Applciation
    When Selecting "nurse" and I enter valid "nurse@nurse.com" and valid "nurse"
    Then Click on login
    Then click on bed allotment
