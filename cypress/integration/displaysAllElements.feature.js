describe('UI shows all the elements we want', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('Displays the header', () => {
    cy.get('.ui.header.huge').should('contain', 'ROCK PAPER SCISSORS BABY')
  })

  it('Displays the scores', () => {
    cy.get('.ui.header.medium').should('contain', 'Your points').and('contain', "Computer's points")
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

  it('displays reset button when a button is clicked', () => {
    cy.get('#reset').should('not.be.visible')
    cy.get(".scissor-button").click()
    cy.get('#reset').should('be.visible')
  })
})