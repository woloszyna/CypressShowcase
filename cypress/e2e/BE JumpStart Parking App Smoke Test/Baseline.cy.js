/*
beforeEach('Something describing', () => {
  // root-level hook
  // runs before every test block
})

describe('Describe your test', () => {
  it('Search bar is visible upon rejecting T&Cs', () => {
    cy.visit('www.google.com')
    cy.contains('Before you continue to Google')
    cy.get('#W0wltc > div').contains('Reject all')
    cy.get('#W0wltc > div').click()
    //expect('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').to.equal('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
    cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').should('be.visible')
  })

  it('Describe your other test', () => {
    cy.visit('www.google.com')
    cy.contains('Before you continue to Google')
    cy.get('#L2AGLb > div').contains('Accept all')
    cy.get('#L2AGLb > div').click()
    //expect('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').to.equal('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input')
    cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input').should('be.visible')
  })

beforeEach('Something describing', () => {
  // root-level hook
  // runs before every test block
})

})
*/