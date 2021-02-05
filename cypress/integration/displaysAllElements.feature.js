describe('UI shows all the elements we want', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it('contains 3 choice buttons', () => {
    cy.get("#scissor-button").should("exist")
    cy.get("#scissor-button").should("exist")
    cy.get("#scissor-button").should("exist")
  })
})