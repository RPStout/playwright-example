@echo off
setlocal

:: 🚀 Notify the user that smoke testing has started
echo Running Smoke Tests...

:: Run only the tests tagged with @smoke and wait for completion
call npx playwright test --grep @smoke --reporter=line

:: Check if the Smoke Tests failed (non-zero exit code)
if errorlevel 1 (
  :: ❌ Inform the user of failure
  echo Smoke tests failed. Aborting full test suite.
  exit /b 1
)

:: ✅ Inform the user that full suite will run
echo Smoke tests passed. Running full test suite...

:: Run ALL tests (comment one out if desired)
call npx playwright test --reporter=line
:: call npx playwright test --grepInvert @smoke --reporter=line

:: 📄 Show report hint for the user
echo.
echo To open last HTML report run:
echo.
echo   npx playwright show-report
echo.

endlocal