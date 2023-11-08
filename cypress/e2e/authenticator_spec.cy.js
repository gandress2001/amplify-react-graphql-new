describe('Authenticator:', function() {
  // Step 1: setup the application state
  beforeEach(function() {
    cy.visit('http://localhost:3000/');
  });
  
  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      // Step 2: Take an action (Sign in)
      // cy.get(selectors.usernameInput).type("testapp");
      cy.get('input[autocomplete="username"]').type("testapp");
      // cy.get(selectors.signInPasswordInput).type("password");
      cy.get('input[autocomplete="current-password"]').type("password");
      // cy.get(selectors.signInButton).contains('Sign in').click();
      cy.get('.amplify-button').contains('Sign in').click();
      

      cy.wait(3000);

      // Step 3: Make an assertion (Check for sign-out text)
        // cy.get(selectors.signOutButton).contains('Sign out');
        cy.contains('button', 'Sign out');
    });
  });

});
// export const selectors = {
//   // Auth component classes
//   usernameInput: '[data-amplify-usernamealias="true"]',
//   signInPasswordInput: '[data-amplify-password="true"]',
//   signInButton: '[data-variation="primary"]',
//   signOutButton: 'button'
// }