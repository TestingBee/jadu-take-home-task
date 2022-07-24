# Instructions
Part of the test, I have implemented two scenarios rest of the scenarios are in test-scenarios.md file

## scenario 1: validation failure
GIVEN the form is not filled
WHEN I click `Next`
THEN I should stay on same page
AND validation error message `This is a required field` should be displayed underneath form field for mandatory fields

## scenario 2: submit form success
GIVEN the form is filled with all mandatory fileds
WHEN I submit the form
THEN I should be navigated to next page
AND see `Thanks for completing this form`


## How to run the application

Install latest version of nodejs and npm.

To run the application clone the repository and run `npm install` from the root of the repository.

Once the node modules are installed. Run the command `npm run cy:run` to run cypress tests using CLI.

If you want to run the cypress tests using iteractive mode run command `npm cy:open`

# Source materials used for reference

- https://docs.cypress.io/guides/getting-started/installing-cypress
- https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test#Add-a-test-file
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
- StackOverflow

