# Feature
> As a User
I’d like to be able to fill in the form
So that I can request a demonstration

## scenario1: fail validation
GIVEN the form is not filled
WHEN I click `Next`
THEN I should stay on same page
AND validation error message `This is a required field` should be displayed underneath form field for mandatory fields

## scenario2: submit form success
GIVEN the form is filled with all mandatory fileds
WHEN I submit the form
THEN I should be navigated to next page
AND see `Thanks for completing this form`

## scenario3: resubmiting the form by refreshing the confirmation page
GIVEN the demo form is submitted 
AND I am on confirmation page
WHEN I refresh the confirmation page 
THEN I should see error message `This form has already been submitted. Your submission has not been sent a second time.`
