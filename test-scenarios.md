# Feature
> As a User
I’d like to be able to fill in the form
So that I can request a demonstration

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

## scenario 3: previous button click should take user back to editable form
GIVEN I am on review page of the form
WHEN I click on previos button
THEN I should be navigated to the form
And form should be preloaded with information provided
And form should be editable

## scenario 4: resubmiting the form should error
GIVEN the demo form is submitted 
AND I am on confirmation page
WHEN I navigate back to previous page
AND I click submit 
THEN I should see error message `This form has already been submitted. Your submission has not been sent a second time.`