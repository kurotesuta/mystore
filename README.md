# Cypress demo

A Test Framework, uses http://automationpractice.com/ as the target test website.

## Installation

Install the dependencies:

```sh
cd mystore
npm install
```

For running tests in parallel, [Sorry-cypress](https://github.com/sorry-cypress/sorry-cypress) 
is required, use:

```sh
docker-compose -f ./docker-compose.minio.yml up
```

> Note: Sorry-cypress uses ports like 8080, 9000... if you have other services running on the same
ports change the config in `docker-compose.minio.yml`

## Running tests

To run tests locally use:

```sh
./node_modules/.bin/cypress open
```

To run tests in parallel open a new terminal for each browser, example:

```sh
CYPRESS_API_URL="http://localhost:1234/" ./node_modules/cy2/bin/cy2 run --parallel --record --key interview --ci-build-id interview --browser edge
```

> Note: change the key value to a different string for each command call, example: interview, interview2...

## Test scripts description

Test scripts are found under cypress/integration folder

| Spec | Description |
| ------ | ------ |
| contact_page.spec.js | Verifies user can send a message through contact us page |
| cart.spec.js | Verifies there are not items in the cart for new accounts |
| my_account.spec.js | Verifies user actions are shown |
| order_history.spec.js | Verifies order history is empty for new accounts |

## Notable issue(s) with the target test site

### Error when submitting a message through Contact page

http://automationpractice.com/index.php?controller=contact

When running integration/contact_page.spec.js, at the time of clicking Send, the website returns a generic error and the message is not sent. This only occurs when running the Test Script, manually the test passes. The DOM seems to have loaded successfully and no related errors are observed in the Console or Network tabs in Dev tools.

## How you would go about verifying and improving site's quality

- Since is an online store, I would also look for missing links, images, etc. Using some like [link-checker](https://github.com/timaschew/link-checker) comes to mind.
- I would expand on test scripts to cover other basic functionality of the site
- Add some basic security tests to user sign up/sign in, suggest to validate against burner email providers
- Add API tests to verify basic functionality
