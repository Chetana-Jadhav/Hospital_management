$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cucumber1.feature");
formatter.feature({
  "line": 1,
  "name": "verify multiple scenarios with different users",
  "description": "",
  "id": "verify-multiple-scenarios-with-different-users",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test Login for admin with Valid Credential",
  "description": "",
  "id": "verify-multiple-scenarios-with-different-users;test-login-for-admin-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser and Start Applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Selecting \"admin\" and I enter valid \"admin@admin.com\" and valid \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "veryfy title",
  "keyword": "Then "
});
formatter.match({
  "location": "hoapital.open_chrome_browser_and_Start_Applciation()"
});
formatter.result({
  "duration": 11609397200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 11
    },
    {
      "val": "admin@admin.com",
      "offset": 37
    },
    {
      "val": "admin",
      "offset": 65
    }
  ],
  "location": "hoapital.selecting_and_I_enter_valid_and_valid(String,String,String)"
});
formatter.result({
  "duration": 576572199,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.click_on_login()"
});
formatter.result({
  "duration": 962855899,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.veryfy_title()"
});
formatter.result({
  "duration": 15335100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Test Login for with Valid Credential",
  "description": "",
  "id": "verify-multiple-scenarios-with-different-users;test-login-for-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Open chrome browser and Start Applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Selecting \"doctor\" and I enter valid \"doctor@doctor.com\" and valid \"doctor\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "verify dashboard title",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "add patient",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify title of patient page",
  "keyword": "Then "
});
formatter.match({
  "location": "hoapital.open_chrome_browser_and_Start_Applciation()"
});
formatter.result({
  "duration": 10087873199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "doctor",
      "offset": 11
    },
    {
      "val": "doctor@doctor.com",
      "offset": 38
    },
    {
      "val": "doctor",
      "offset": 68
    }
  ],
  "location": "hoapital.selecting_and_I_enter_valid_and_valid(String,String,String)"
});
formatter.result({
  "duration": 636134800,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.click_on_login()"
});
formatter.result({
  "duration": 585742600,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.verify_dashboard_title()"
});
formatter.result({
  "duration": 12524600,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.add_patient()"
});
formatter.result({
  "duration": 6423451001,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.verify_title_of_patient_page()"
});
formatter.result({
  "duration": 15388300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test Login for with Valid Credential",
  "description": "",
  "id": "verify-multiple-scenarios-with-different-users;test-login-for-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "Open chrome browser and Start Applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Selecting \"nurse\" and I enter valid \"nurse@nurse.com\" and valid \"nurse\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Click on login",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "click on bed allotment",
  "keyword": "Then "
});
formatter.match({
  "location": "hoapital.open_chrome_browser_and_Start_Applciation()"
});
formatter.result({
  "duration": 9982965801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nurse",
      "offset": 11
    },
    {
      "val": "nurse@nurse.com",
      "offset": 37
    },
    {
      "val": "nurse",
      "offset": 65
    }
  ],
  "location": "hoapital.selecting_and_I_enter_valid_and_valid(String,String,String)"
});
formatter.result({
  "duration": 610828800,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.click_on_login()"
});
formatter.result({
  "duration": 764151000,
  "status": "passed"
});
formatter.match({
  "location": "hoapital.click_on_bed_allotment()"
});
formatter.result({
  "duration": 796069100,
  "status": "passed"
});
});