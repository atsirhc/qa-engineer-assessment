# QA Engineer Technical Assessment

# Author
Submitted by: CHRISTA_ALGARNE

This repository contains my submission for the QA Engineer Technical Assessment.  
The assessment covers:

- Manual testing
- API testing
- Bug reporting
- Test documentation
- Playwright automation

----------------------------------------------------------------------------------

# Test Environment

## Web Application

- URL: https://www.saucedemo.com/
- Username: `standard_user`
- Password: `secret_sauce`

## API Testing

- URL: https://jsonplaceholder.typicode.com


-------------------------------------------------------------------------------------------------------------

# Tools Used
|-----------------|----------------------------------------|
| Tool            | Purpose                                |
|-----------------|----------------------------------------|
| Playwright      | Web automation                         |
| Postman         | API testing                            |
| Microsoft Excel | Test case documentation                |
| Microsoft Word  | Bug reports and summaries              |
| GitHub          | Version control and repository hosting |
| Node.js         | Playwright runtime environment         |
|-----------------|----------------------------------------|

-------------------------------------------------------------------------------------------------------------

# Repository Structure

```text
qa-engineer-assessment/
│
├── README.md
│
├── api-testing/
│   ├── api-test-cases/
│   │   └── api-test-cases.xlsx
│   │
│   ├── api-test-results/
│   │   ├── api-test-excution-results.docx
│   │   ├── api testing.postman_collection.json
│   │   └── JSONPlaceholder API.postman_environment.json
│   │
│   ├── bug-report-api/
│   │   ├── bug_report_apitc012.xlsx
│   │   
│   │
│  
│
├── automation-testing/
│   ├── html-report/
│   ├── tests/
│   ├── package.json
│   ├── package-lock.json
│   └── playwright.config.ts
│
└── manual-testing/
    ├── bug-report/
    │   ├── bug_reports_saucedemo.xlsx
    │   
    │
    ├── screenshots/
    │   └── manual-testing-screenshots.docx
    │
    └── test-cases/
        ├── saucedemo-test-cases.xlsx
        
```

--------------------------------------------------------------------------------------

# Deliverables

## Test Documentation

### Manual Web Test Cases
[SacuceDemo-Test-Cases.xlsx](./manual-testing/test-cases/Saucedemo-Test-Cases.xlsx)

### API Test Cases
[API-Test-Cases.xlsx](./api-testing/api-test-cases/API-Test-Cases.xlsx)

### Execution Results
[manual-testing-screenshots.docx](./manual-testing/screenshots/manual-testing-screenshots.docx)
[API-Test-Execution-Report.docx](./api-testing/api-test-results/API-Test-Execution-Report.docx)

----------------------------------------------------------------------------------

## Bug Reports

### Bug Report - Web Application Testing
[Bug_Reports_SauceDemo.xlsx](./manual-testing/bug-report/Bug_Reports_SauceDemo.xlsx)

### Bug Report - Api Testing
[Bug_Report_APITC012.xlsx](./api-testing/bug-report-api/Bug_Report_APITC012.xlsx)

--------------------------------------------------------------------------------------------------------------
- If you encounter issues downloading or previewing the files directly from GitHub, you may access the backup copies using the GOOGLE DRIVE LINK provided below:
[https://drive.google.com/drive/folders/1rxbKsKHGAvzyLlHJkuV-dWy1fPeMsEBz?usp=sharing]

----------------------------------------------------------------------------------------------------------------


## Supporting Evidence

### Screenshots
See the `/screenshots` folders.


----------------------------------------------------------------------------------------------------------------

# Automation Testing

Automation testing was implemented using Playwright.

## Covered Flow

The automated test covers:

- User login
- Add product to cart
- Cart validation
- Checkout process
- Order completion

--------------------------------------------------------------------------------------------------------------

# Setup Instructions

## Prerequisites

Install the following:

- Node.js
- npm

-----------------------------

## Install Dependencies

```bash
npm install
```

---------------------------------

## Install Playwright Browsers

```bash
npx playwright install
```

---------------------------------

## Run Automation Tests

```bash
npx playwright test
```

---------------------------------

## Open Playwright Report

```bash
npx playwright show-report
```

---------------------------------------------------------------------------------------------------------------

# API Testing Scope

The following endpoints were tested:

|--------|----------|--------------------------|
| Method | Endpoint | Description              |
|--------|----------|--------------------------|
| GET    | /users   | Retrieve all users       |
| GET    | /users/1 | Retrieve a specific user |
| POST   | /posts   | Create a new post        |
| PUT    | /posts/1 | Update an existing post  |
|--------|----------|--------------------------|

The API tests include:

- Positive scenarios
- Negative scenarios
- Edge cases
- Request Details
- Response validation
- Short Analysis
- Evidence

------------------------------------------------------------------------------------------------------------
