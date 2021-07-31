// TASK 1
//
// Navigates to Contact us page, fills and submits contact form and
// verifies message was submitted successfully.

describe('Use contact page', () => {
    before(() => {
        cy.visit('/')
        cy.title().should('include', 'My Store')
    })

    it('should navigate to Contact us page', () => {
        cy.contains('Contact us').click()
        cy.title().should('include', 'Contact us - My Store')
    })

    it('should fill contact us form', () => {
        cy.get('select[id="id_contact"]').select('Customer service')
        cy.get('input[id="email"]').type('allyourbasebelong@to.us')
        cy.get('textarea[id="message"]').type('Lorem ipsum dolor sit amet')
    })

    it('should submit form', ()=> {
        cy.get('button[id="submitMessage"]').click()
    })

    it('should show successfully sent message', ()=> {
        cy.contains('Your message has been successfully sent to our team.')
    })
})
