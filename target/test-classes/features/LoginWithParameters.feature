@regression
Feature: Login as different users

    Scenario: login as a driver user
      Given the user is on the login page
      When the user logs in using "User10" and "UserUser123"
      Then the user should be able to login
      And the title contains "Dashboard"

  Scenario Outline: login as a driver
    Given the user logged in as "<usertype>"
    Then the user should be able to login
    And the title contains "Dashboard"
  Examples:
  |usertype|
  |driver  |
  |store_manager|
  |sales_manager|
