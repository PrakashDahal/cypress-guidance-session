# Cypress E2E Automation Project

> URL: `https://www.saucedemo.com/v1`

## Project Structure

This project is organized into the following folder structure to keep the test cases, page objects, helper functions, and utilities well-organized:

```
cypress
├── e2e             # Contains all end-to-end (E2E) test files
│   └── test        # E2E test cases are stored here
├── pages           # Page Object Model (POM) files to encapsulate page elements and methods
├── helper          # Helper functions for common actions like login, API calls, etc.
├── utils           # Utility functions and constants (e.g., data generators, formatting)
└── support         # Cypress support files and custom commands (auto-generated)
```

### Folder Overview

- **`test/`**: Contains all E2E test cases written to validate user flows and scenarios.
- **`pages/`**: Implements the Page Object Model, encapsulating page-specific locators and actions.
- **`helper/`**: Defines helper methods that are used across multiple test files (e.g., setup, cleanup).
- **`utils/`**: Includes utility files for reusable functions, constants, and configurations.

## Setting Up the Cypress Project

Follow the steps below to set up and run the Cypress project:

1. **Initialize the Project:**

   ```bash
   npm init -y
   ```

2. **Install Cypress:**

   ```bash
   npm install cypress --save-dev
   ```

3. **Open Cypress:**

   ```bash
   npx cypress open
   ```

   This will open the Cypress Test Runner.

4. **Run Tests in Headed Mode:**

   ```bash
   npx cypress run --headed
   ```

   This command runs the tests in the browser.

5. **Run Specific Tests:**

   To run a specific test file, use:

   ```bash
   npx cypress run --spec "cypress/e2e/test/<test-file>.cy.js"
   ```

6. **Running Tests in a Different Browser:**

   ```bash
   npx cypress run --browser chrome
   ```

   Replace `chrome` with your desired browser (e.g., `firefox`).

7. **View Test Reports:**

   If you are using a reporting tool (like `mochawesome`), view the test reports in the `cypress/reports` directory.

With this setup, you are ready to start building and running your Cypress end-to-end tests!
