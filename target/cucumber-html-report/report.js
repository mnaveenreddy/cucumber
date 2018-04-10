$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "login",
  "description": "",
  "id": "login;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open \"\u003cbrowser\u003e\" browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I naviagte to \"\u003curl\u003e\" url",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"\u003cemail\u003e\" into the email field",
  "keyword": "And "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "login;login;",
  "rows": [
    {
      "cells": [
        "browser",
        "url",
        "email"
      ],
      "line": 9,
      "id": "login;login;;1"
    },
    {
      "cells": [
        "firefox",
        "https://en-gb.facebook.com/",
        "aa@gmail.com"
      ],
      "line": 10,
      "id": "login;login;;2"
    },
    {
      "cells": [
        "firefox",
        "https://en-gb.facebook.com/",
        "bb@gmail.com"
      ],
      "line": 11,
      "id": "login;login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "login",
  "description": "",
  "id": "login;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I naviagte to \"https://en-gb.facebook.com/\" url",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"aa@gmail.com\" into the email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 8
    }
  ],
  "location": "stepdefinitions.i_open_browser(String)"
});
formatter.result({
  "duration": 17418924687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://en-gb.facebook.com/",
      "offset": 15
    }
  ],
  "location": "stepdefinitions.i_naviagte_to_url(String)"
});
formatter.result({
  "duration": 2744506341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aa@gmail.com",
      "offset": 9
    }
  ],
  "location": "stepdefinitions.i_enter_into_the_email_field(String)"
});
formatter.result({
  "duration": 497610262,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "login",
  "description": "",
  "id": "login;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I open \"firefox\" browser",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I naviagte to \"https://en-gb.facebook.com/\" url",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"bb@gmail.com\" into the email field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 8
    }
  ],
  "location": "stepdefinitions.i_open_browser(String)"
});
formatter.result({
  "duration": 13051144148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://en-gb.facebook.com/",
      "offset": 15
    }
  ],
  "location": "stepdefinitions.i_naviagte_to_url(String)"
});
formatter.result({
  "duration": 2642144059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bb@gmail.com",
      "offset": 9
    }
  ],
  "location": "stepdefinitions.i_enter_into_the_email_field(String)"
});
formatter.result({
  "duration": 355896426,
  "status": "passed"
});
});