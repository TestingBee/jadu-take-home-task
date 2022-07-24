describe('application demo request', () => {
  it('Scenario 1: incomplete form submission should display validation errors', () => {
    cy.visit('https://www.jadu.net/xfp/form/204')
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('#q03edae0235e3eb19801864a76eb03461edf03534').type('Google')
    cy.get('#q50349b6cff30a2d2546d383f6107bedcd16e705e').select('uk_ireland')

    cy.get('button[name="next"]').click();
    // assert form validation errors
    cy.get('h2').contains('required details').should('include.text','Please check the required details are completed');
    cy.get('label').should('include.text', 'My first name is');
    cy.get('label').should('include.text', 'My last name is');
    cy.get('label').should('include.text', 'You can email me at');
  })
  it('Scenario 2: successful demo request submission should display confirmation text', () => {
    cy.visit('https://www.jadu.net/xfp/form/204')
    cy.get('#hs-eu-confirmation-button').click()
    cy.get('#q3a3f0360c07a2f193f5d6c3deb4e3eaae30a645e').type('John')
    cy.get('#qd1739dc6339989544b4f2cb33c5589b732dd64be').type('Smith')
    cy.get('#q1849eab7c39f65c5cda6ad7e4d0b1bb6bf9662cd').type('john@yahoo.com')
    cy.get('#q03edae0235e3eb19801864a76eb03461edf03534').type('Google')
    cy.get('#q50349b6cff30a2d2546d383f6107bedcd16e705e').select('uk_ireland')

    //Click next to review the form details
    cy.get('button[name="next"]').click();

    //Submit demo request
    cy.get('button[name="commit"]').click();
    cy.get('h2').contains('Thanks').should('include.text','Thanks for completing this form.');
  });
})