@regression
Feature: Account types

  @smoke
  Scenario: Driver user
    Given the user logged in as "driver"
    When the user navigates to "Activities" "Calendar Events"
    Then the title contains "Calendar Events - Activities"

  Scenario: Sales manager user
    Given the user logged in as "sales_manager"
    When the user navigates to "Customers" "Accounts"
    Then the title contains "Accounts - Customers"

  @smoke
  Scenario: Store manager user
    Given the user logged in as "store_manager"
    When the user navigates to "Customers" "Contacts"
    Then the title contains "Contacts - Customers"


  Scenario Outline: Login with different accounts <userType>
    Given the user logged in as "<userType>"
    When the user navigates to "<tab>" "<module>"
    Then the title contains "<title>"

    Examples:
      | userType      | tab        | module          | title                                                              |
      | driver        | Fleet      | Vehicles Model  | Vehicles Model - Entities - System - Car - Entities - System       |
      | driver        | Customers  | Accounts        | Accounts - Customers                                               |
      | driver        | Customers  | Contacts        | Contacts - Customers                                               |
      | driver        | Activities | Calendar Events | Calendar Events - Activities                                       |
      | driver        | System     | Jobs            | Jobs - System                                                      |
      | sales_manager | Fleet      | Vehicles        | All - Car - Entities - System - Car - Entities - System            |
      | sales_manager | Fleet      | Vehicles Model  | All - Vehicles Model - Entities - System - Car - Entities - System |
      | sales_manager | Customers  | Accounts        | All - Accounts - Customers                                         |
      | sales_manager | Customers  | Contacts        | All - Contacts - Customers                                         |
      | sales_manager | Activities | Calendar Events | All - Calendar Events - Activities                                 |
      | sales_manager | System     | Jobs            | All - Jobs - System                                                |
      | store_manager | Fleet      | Vehicles        | All - Car - Entities - System - Car - Entities - System            |
      | store_manager | Fleet      | Vehicles Model  | All - Vehicles Model - Entities - System - Car - Entities - System |
      | store_manager | Customers  | Accounts        | All - Accounts - Customers                                         |
      | store_manager | Customers  | Contacts        | All - Contacts - Customers                                         |
      | store_manager | Activities | Calendar Events | All - Calendar Events - Activities                                 |
      | store_manager | System     | Jobs            | All - Jobs - System                                                |
      | store_manager | System     | Menus           | All - Menus - System                                               |


  Scenario Outline: Different user types
    Given the user logged in as "<userType>"

    Examples:
      | userType      |
      | driver        |
      | admin         |
      | store_manager |
      | sales_manager |

