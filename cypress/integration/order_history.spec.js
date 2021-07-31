// TASK 2
//
// Navigates to order history and verifies no orders are shown
// on new accounts.

describe('Use order history and details', function () {
    const username = 'allofyourbasebelongs@to.us'
    const password = 'interview'

    before(() => {
        cy.doLogin({ email: username, password: password })        
    })

    it('should navigate to orders history and details', function () {
        cy.get('a[title="Orders"]').click()
        cy.get('h1').should('contain', 'Order history')
    })

    it('should show no orders on new accounts', function() {
        cy.get('p[class="alert alert-warning"]').should('contain', 
        'You have not placed any orders.')
    })

    after(() => {
        cy.doLogout()
    })
})
