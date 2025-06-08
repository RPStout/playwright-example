#!/bin/bash

## Notify the user that smoke testing has started
echo "🚀 Running Smoke Tests..."

## Run only the tests tagged with @smoke
npx playwright test --grep @smoke

## Check if the Smoke Tests failed (non-zero exit code)
if [ $? -ne 0 ]; then
  ## Inform the user of failure
  echo "❌ Smoke tests failed. Aborting full test suite."
  ## Exit with error code
  exit 1
fi

## Inform the user that full suite will run
echo "✅ Smoke tests passed. Running full test suite..."

## === Choose ONE of the commands below ===
## Option 1: Run ALL tests (including smoke again)
npx playwright test
## Option 2: Run all tests EXCEPT smoke tests
# npx playwright test --grepInvert @smoke