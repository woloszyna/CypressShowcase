
beforeEach('Something describing', () => {
    cy.visit('https://sys-parking-front.azurewebsites.net/home')
    cy.get('#Login > span').click()
})


describe('Log in Page Verification', () => {

    it('Login Page Displays correctly', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#next').should('have.text', 'Sign in')
        })
    })

    it('User cannot log in with incorrect username value', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('incorrect@gmail.com')
            cy.get('#password').type('flumps1!')
            cy.get('#next').click()
            cy.contains('We can\'t seem to find your account')
        })
    })
    
    it('User cannot log in with incorrect password value', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('testuser01@eazypark.onmicrosoft.com')
            cy.get('#password').type('incorrectPassword')
            cy.get('#next').click()
            cy.contains('Your password is incorrect')
        })
    })

    it('User can log in with correct username and password values', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('testuser01@eazypark.onmicrosoft.com')
            cy.get('#password').type('flumps1!')
            cy.get('#next').click()
        })
        cy.wait(5000)
        cy.get('#Customer > span').contains('Test User 01')
    })

    it('User can successfully log out after logging in', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('testuser01@eazypark.onmicrosoft.com')
            cy.get('#password').type('flumps1!')
            cy.get('#next').click()
        })
        cy.get('#Customer > span').contains('Test User 01')
        cy.get('#Customer > span').click()
        cy.get('#LogOut').click()
        cy.get('#Login > span').should('have.text', 'Login')
    })

        it('Admin cannot log in with incorrect username value', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('incorrect@gmail.com')
            cy.get('#password').type('flumps1!')
            cy.get('#next').click()
            cy.contains('We can\'t seem to find your account')
        })
    })
    
    it('Admin cannot log in with incorrect password value', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('administrator@eazypark.onmicrosoft.com')
            cy.get('#password').type('incorrectPassword')
            cy.get('#next').click()
            cy.contains('Your password is incorrect')
        })
    })

    it('Admin can log in with correct username and password values', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('administrator@eazypark.onmicrosoft.com')
            cy.get('#password').type('flumps1!')
            cy.get('#next').click()
        })
        cy.get('#Customer > span').contains('System Admin')
    })

    it('Admin can successfully log out after logging in', () => {
        cy.origin('https://eazypark.b2clogin.com', () => {
            cy.get('#logonIdentifier').type('administrator@eazypark.onmicrosoft.com')
            cy.get('#password').type('flumps1!')
            cy.get('#next').click()
        })
        cy.get('#Customer > span').contains('System Admin')
        cy.get('#Customer > span').click()
        cy.get('#LogOut').click()
        cy.get('#Login > span').should('have.text', 'Login')
    })

})

afterEach('Awating the next test', () => {
    cy.wait(1000)
})
