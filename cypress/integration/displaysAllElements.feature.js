describe('UI shows all the elements we want', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('contains 3 choice buttons', () => {
    cy.get(".scissor-button").should("exist")
    cy.get(".paper-button").should("exist")
    cy.get(".rock-button").should("exist")
  })

  it('displays result when a button is clicked', () => {
    cy.get('#userChoice').should('not.be.visible')
    cy.get(".scissor-button").click()
    cy.get('#userChoice').should('be.visible')
  })
})