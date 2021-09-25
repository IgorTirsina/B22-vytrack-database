@regression
Feature: Test Data Base Connection

    @db
    Scenario Outline: Create connection to DB
      Given User connects to DB
      When User sends the "<query>" request to DB
      Then  User should get the proper information

      Examples:
        |query|
        |select id,first_name,last_name from orocrm_contact where first_name='Vanetta'|