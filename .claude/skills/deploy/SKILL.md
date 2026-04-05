Deploy the app to staging by running the following steps in order. Stop immediately and report the error if any step fails — do not proceed to the next step.

## Steps

### 1. Run tests
Run the test suite:
```
npm test
```
If tests fail, report which tests failed and do not continue.

### 2. Build production bundle
```
npm run build
```
If the build fails, report the error and do not continue.

### 3. Push to staging
```
npm run deploy:staging
```
If this script is not yet defined, tell the user to add a `deploy:staging` script to package.json (e.g. an rsync, scp, or CLI push command for their hosting provider) and stop.

## On success
Confirm all three steps passed and the app has been deployed to staging.
