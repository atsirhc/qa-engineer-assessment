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

-----------------------------------------------------------------------------------------
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
│   │   ├── postman_collection.json
│   │   └── postman_environment.json
│   │
│   ├── bug-report-api/
│   │   ├── bug_report_apitc012.xlsx
│   │   
│   │
│   └── README.md
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
    │   ├── bug-report-saucedemo.xlsx
    │   
    │
    ├── screenshots/
    │   └── manual-test-execution-results.docx
    │
    └── test-cases/
        ├── manual-test-cases.xlsx
        
```

--------------------------------------------------------------------------------------

# Deliverables

## Test Documentation

### Manual Web Test Cases
[Download Web Test Cases](./test-cases/web-test-cases.xlsx)

### API Test Cases
[Download API Test Cases](./test-cases/api-test-cases.xlsx)

### Execution Results
[Download Execution Results](./test-cases/execution-results.docx)

----------------------------------------------------------------------------------


## Bug Reports

### Bug Report - Web Application Testing
[Bug_Reports_SauceDemo.xlsx](./manual-testing/bug-report/Bug_Reports_SauceDemo.xlsx)

### Bug Report - Api Testing
[Download Bug Report 002](./bug-reports/bug-report-002.docx)


-----------------------------------------------------------------------------------

## Supporting Evidence

### Screenshots
See the `/screenshots` folders.


------------------------------------------------------------------------------------

# Automation Testing

Automation testing was implemented using Playwright.

## Covered Flow

The automated test covers:

- User login
- Add product to cart
- Cart validation
- Checkout process
- Order completion

---------------------------------------------------------------------------------------

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

--------------------------------------------------------------------------------------------

# Setup Instructions

## Prerequisites

Install the following:

- Node.js
- npm

---

## Install Dependencies

```bash
npm install
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

## Run Automation Tests

```bash
npx playwright test
```

---

## Open Playwright Report

```bash
npx playwright show-report
```

------------------------------------------------------------------------------------

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
- Status code verification

------------------------------------------------------------------------------------
