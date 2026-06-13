# Playwright SauceDemo Capstone

## Project Overview

This project is an End-to-End Test Automation Framework built using Playwright and JavaScript for the SauceDemo application.

Website: https://www.saucedemo.com

The framework follows the Page Object Model (POM) design pattern and includes automated test coverage for login, product validation, cart functionality, checkout flow, accessibility checks, and edge case scenarios.

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* GitHub Actions
* Page Object Model (POM)

---

## Project Structure

```text
src/
 └── pages/
      ├── LoginPage.js
      ├── ProductPage.js
      ├── CartPage.js
      └── CheckoutPage.js

tests/
 ├── login.spec.js
 ├── product.spec.js
 ├── cart.spec.js
 ├── checkout.spec.js
 ├── edgeCases.spec.js
 └── accessibility.spec.js

test-data/
 └── users.json

utils/
 └── logger.js

.github/
 └── workflows/
      └── playwright.yml
```

## Test Scenarios Covered

### Login Tests

* Valid Login
* Invalid Login
* Locked User Login

### Product Tests

* Product List Validation
* Product Details Validation

### Cart Tests

* Add Product to Cart
* Cart Validation

### Checkout Tests

* Complete Checkout Flow
* Order Confirmation

### Edge Cases

* Network Failure Simulation

### Accessibility

* Image Alt Text Validation

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Prince-p1/Playwright-SauceDemo-Capstone.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Run Tests

```bash
npx playwright test
```

---

## View HTML Report

```bash
npx playwright show-report
```

---

## CI/CD

GitHub Actions workflow is configured to:

* Install dependencies
* Install Playwright browsers
* Execute tests
* Generate reports

---

## Test Results

* Total Tests: 8
* Passed: 8
* Failed: 0

---

## Author

Prince Kumar
