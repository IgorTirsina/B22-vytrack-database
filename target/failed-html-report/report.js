$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AccountTypes.feature");
formatter.feature({
  "name": "Account types",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Login with different accounts \u003cuserType\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user logged in as \"\u003cuserType\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "name": "the user navigates to \"\u003ctab\u003e\" \"\u003cmodule\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the title contains \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userType",
        "tab",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "driver",
        "Fleet",
        "Vehicles Model",
        "Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Accounts",
        "Accounts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Customers",
        "Contacts",
        "Contacts - Customers"
      ]
    },
    {
      "cells": [
        "driver",
        "Activities",
        "Calendar Events",
        "Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "driver",
        "System",
        "Jobs",
        "Jobs - System"
      ]
    },
    {
      "cells": [
        "sales_manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales_manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales_manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "sales_manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "sales_manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "sales_manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    },
    {
      "cells": [
        "store_manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store_manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "store_manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "store_manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "store_manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    },
    {
      "cells": [
        "store_manager",
        "System",
        "Jobs",
        "All - Jobs - System"
      ]
    },
    {
      "cells": [
        "store_manager",
        "System",
        "Menus",
        "All - Menus - System"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with different accounts driver",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Activities\" \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts driver",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"driver\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"System\" \"Jobs\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts sales_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Fleet\" \"Vehicles\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Car - Entities - System - Car - Entities - System\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts sales_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Fleet\" \"Vehicles Model\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Vehicles Model - Entities - System - Car - Entities - System\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts sales_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Accounts\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Accounts - Customers\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts sales_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Contacts - Customers\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts sales_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Activities\" \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Calendar Events - Activities\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts sales_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"System\" \"Jobs\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Jobs - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Jobs - System\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts store_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Fleet\" \"Vehicles\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Car - Entities - System - Car - Entities - System\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded6.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts store_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Fleet\" \"Vehicles Model\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Vehicles Model - Entities - System - Car - Entities - System\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded7.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts store_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Accounts\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Accounts - Customers\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded8.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts store_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Contacts - Customers\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded9.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with different accounts store_manager",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"store_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Activities\" \"Calendar Events\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title contains \"All - Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_title_contains(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.vytrack.step_definitions.LoginStepDefs.the_title_contains(LoginStepDefs.java:69)\r\n\tat ✽.the title contains \"All - Calendar Events - Activities\"(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/AccountTypes.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded10.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/Contacts.feature");
formatter.feature({
  "name": "Contacts page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "name": "login as a given user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using following credentials",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logs_in_using_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "login as a given user \u003cuser\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user logs in using following credentials",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "username",
        "\u003cuser\u003e"
      ]
    },
    {
      "cells": [
        "password",
        "UserUser123"
      ]
    },
    {
      "cells": [
        "firstname",
        "\u003cfirstName\u003e"
      ]
    },
    {
      "cells": [
        "lastname",
        "\u003clastName\u003e"
      ]
    }
  ]
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "firstName",
        "lastName"
      ]
    },
    {
      "cells": [
        "user10",
        "Toney",
        "Hegmann"
      ]
    },
    {
      "cells": [
        "storemanager85",
        "Marcella",
        "Huels"
      ]
    }
  ]
});
formatter.scenario({
  "name": "login as a given user user10",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using following credentials",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logs_in_using_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "login as a given user storemanager85",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in using following credentials",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logs_in_using_following_credentials(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Contact test with email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in as \"sales_manager\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.the_user_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to \"Customers\" \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.NavigationMenuStepDefs.the_user_navigates_to(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the \"vanettaabshire@goldner-toy.co\" from contacts",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.theUserClicksTheFromContacts(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ctd class\u003d\"string-cell editable view-mode prevent-text-selection-on-dblclick grid-cell grid-body-cell grid-body-cell-email\" data-column-label\u003d\"Email\"\u003e...\u003c/td\u003e is not clickable at point (520, 483). Other element would receive the click: \u003cdiv class\u003d\"loader-mask shown\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d93.0.4577.82)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-MDVF616\u0027, ip: \u0027192.168.1.64\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 93.0.4577.82, chrome: {chromedriverVersion: 93.0.4577.63 (ff5c0da2ec0ad..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58345}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 307d943196b4f8d9791d59b181f36497\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.vytrack.step_definitions.ContactsStepDefs.theUserClicksTheFromContacts(ContactsStepDefs.java:73)\r\n\tat ✽.the user clicks the \"vanettaabshire@goldner-toy.co\" from contacts(file:///C:/Users/admin/IdeaProjects/B22-vytrack-database/src/test/resources/features/Contacts.feature:67)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the information should be same with database",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.ContactsStepDefs.theInformationShouldBeSameWithDatabase()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png", "screenshot");
formatter.after({
  "status": "passed"
});
});