Cypress.Commands.add('doLogin', (user) => {
    cy.visit('/index.php?controller=authentication&back=my-account')
    cy.title().should('include', 'Login - My Store')

    cy.get('input[id="email"]').type(user.email)
    cy.get('input[id="passwd"]').type(user.password)
    cy.get('button[id="SubmitLogin"]').click()
    
    cy.get('a[class="account"]').should('contain', 'Random Tester')
})

Cypress.Commands.add('doLogout', () => {
    cy.get('a[class="logout"]').click()
    cy.get('a[class="login"]').should('contain', 'Sign in')
})
