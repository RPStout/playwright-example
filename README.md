# 🎭 playwright-example

This repository demonstrates a complete Playwright test automation framework built from the ground up using TypeScript. It showcases best practices for structuring end-to-end tests, using the Page Object Model, and building scalable, maintainable test suites for web applications.

## 🚀 Project Goals

The purpose of this repository is to:

- Showcase the ability to build and maintain a Playwright test framework using TypeScript.
- Demonstrate test organization, reusability, and maintainability.
- Validate UI behavior across multiple browsers using automated E2E tests.
- Provide a clean starting point for scalable test automation projects.

## 🧰 Tech Stack

- [Playwright](https://playwright.dev/) – Fast and reliable browser automation.
- [TypeScript](https://www.typescriptlang.org/) – Static typing and better tooling.
- [Node.js](https://nodejs.org/) – JavaScript runtime.
- [Playwright Test Runner](https://playwright.dev/docs/test-intro) – Built-in test runner.
- Additional libraries/tools as needed (e.g., ESLint, Prettier, Allure).

## 🗂️ Project Structure

```
playwright-example/
├── tests/                 # Test cases organized by feature
│   └── login.spec.ts
├── pages/                 # Page Object Models for encapsulating UI logic
│   └── login.page.ts
├── utils/                 # Utility functions and helpers
├── config/                # Test configs or environment settings
├── reports/               # Test report outputs
├── playwright.config.ts   # Playwright global configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project metadata and dependencies
└── README.md              # Project overview and usage
```

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/RPStout/playwright-example.git
cd playwright-example
```

2. Install dependencies:

```bash
npm install
```

## 🧪 Running Tests with Smoke Validation

This project includes scripts to run smoke tests first, and if they pass, continue with the full test suite.

### 🔧 Prerequisites

#### On macOS/Linux (Bash)

Make sure the shell script is executable (only needs to be done once):

```bash
chmod +x scripts/run-tests.sh
```

#### On Windows (Command Prompt)

No special permissions needed for `.cmd` files.

---

### 🚀 Run Tests

#### On macOS/Linux (Bash)

Run the shell script:

```bash
./scripts/run-tests.sh
```

#### On Windows (Command Prompt)

Run the batch file:

```cmd
scripts\run-tests.cmd
```

### 📝 How it Works

- ✅ Runs all tests tagged with `@smoke` first.
- ❌ If any smoke test fails, the script stops and prevents the full suite from running.
- ✅ If smoke tests pass, the full suite runs next (including smoke tests again by default).
- 🔁 You can change the script to **exclude** smoke tests from the full run if preferred.

---

### 📦 Optional: Run Tests Manually

```bash
# Run only smoke tests
npx playwright test --grep @smoke

# Run all tests including smoke
npx playwright test

# Run tests in headed mode:
npx playwright test --headed

# Run all tests excluding smoke
npx playwright test --grepInvert @smoke

# Run with UI to watch tests:
npx playwright test --ui

# Run a specific test file:
npx playwright test tests/login.spec.ts
```

## 📸 Reporting

Generate and view the HTML report:

```bash
npx playwright show-report
```

> If you're using Allure or another reporting tool, include instructions here.

## 📚 Documentation

- 📖 [Playwright Docs](https://playwright.dev/)
- 📖 [Playwright Test Generator](https://playwright.dev/docs/codegen)
- 📖 [Using the Page Object Model](https://playwright.dev/docs/pom)

## 🧠 Skills Demonstrated

- Framework setup using Playwright + TypeScript
- Page Object Model implementation
- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel and tagged test execution
- Modern, modular TypeScript project structure
- Basic HTML test reporting

## 🏁 Next Steps

- Add GitHub Actions or other CI integration
- Parameterize test data and add environment configs
- Add visual regression testing
- Integrate linting and formatting (ESLint + Prettier)

---

## 👤 Author

**Ryan Stout**  
[GitHub](https://github.com/RPStout) • [LinkedIn](https://www.linkedin.com/in/ryan-stout-19053217/)

---

> Feel free to fork this repo or use it as a reference for your own Playwright test projects!
