// TASK 2
//
// Navigates to cart and verifies no orders are shown
// on new accounts.

describe('Use order history and details', function () {
    const username = 'allofyourbasebelongs@to.us'
    const password = 'interview'

    before(() => {
        cy.doLogin({ email: username, password: password })        
    })

    it('should navigate to cart', function () {
        cy.get('a[title="View my shopping cart"]').click()
        cy.get('h1').should('contain', 'Shopping-cart summary')
    })

    it('should show cart empty on new accounts', function() {
        cy.get('p[class="alert alert-warning"]').should('contain', 
        'Your shopping cart is empty.')
    })

    after(() => {
        cy.doLogout()
    })
})
