// TASK 2
//
// Verifies all account actions are shown to the user in My account page.

describe('Use my account dashboard', function () {
    const username = 'allofyourbasebelongs@to.us'
    const password = 'interview'

    before(() => {
        cy.doLogin({ email: username, password: password })        
    })

    it('should show account actions', function() {
        cy.get('a[title="Orders"]').should('contain', 'Order history and details')
        cy.get('a[title="Credit slips"]').should('contain', 'My credit slips')
        cy.get('a[title="Addresses"]').should('contain', 'My addresses')
        cy.get('a[title="Information"]').should('contain', 'My personal information')
        cy.get('a[title="My wishlists"]').should('contain', 'My wishlists')
    })

    after(() => {
        cy.doLogout()
    })
})
