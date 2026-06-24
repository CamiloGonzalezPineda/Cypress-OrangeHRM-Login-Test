# Cypress-OrangeHRM-Login-Test

## Description

This test automation project was developed using Cypress on the OrangeHRM demo application.

The main goal of this project is to practice End-to-End (E2E) testing by validating the user authentication flow and verifying key interface elements after a successful login.

## Technologies Used

* JavaScript
* Cypress
* Node.js
* NPM

## Test Website

OrangeHRM Demo:

https://opensource-demo.orangehrmlive.com/

## Automated Test Scenario

### Login and Dashboard Validation

The test performs the following actions:

1. Accesses the login page.
2. Verifies that the main interface elements are visible.
3. Enters valid credentials.
4. Executes the login process.
5. Verifies that the user has successfully logged in.
6. Validates visible information within the Dashboard.

### Validations Performed

* OrangeHRM logo is visible.
* Username field is visible.
* Password field is visible.
* Login button is visible.
* Copyright information is visible.
* User name is displayed after login.
* "Time at Work" widget is visible on the Dashboard.

## Project Structure

```text
Cypress-OrangeHRM-Login-Test/
│
├── cypress/
│   ├── e2e/
│   ├── fixtures/
│   └── support/
│
├── evitenciaExtraTest/
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation

Clone the repository:

```bash
git clone <REPOSITORY_URL>
```

Install dependencies:

```bash
npm install
```

## Running the Tests

Open Cypress Test Runner:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

## Learning Objectives

This project was developed to strengthen knowledge in:

* End-to-End (E2E) Test Automation
* Cypress Fundamentals
* DOM Element Validation
* CSS Selectors
* Assertions
* Authentication Flow Testing
* Automated Testing Best Practices

## Evidence

The `evitenciaExtraTest` folder contains evidence and supporting resources related to the execution of the automated tests performed during this practice.

## Author

Camilo González

This project was developed for educational purposes as part of my learning journey in Quality Assurance (QA) and Test Automation.
