describe('Game functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        cy.stub(win.Math, 'random').returns(0)
      }
    })
  })

  it('user wins with rock against scissor', () => {
    cy.get('.rock-button').click()
    cy.get('#winner').should('contain', 'You win')
    cy.get('[data-cy="points"]').should('contain', "Your points: 1")
  })

  it('user loses with paper against scissor', () => {
    cy.get('.paper-button').click()
    cy.get('#winner').should('contain', 'You lost')
    cy.get('[data-cy="points"]').should('contain', "Computer's points: 1")
  })

  it('user ties with scissor against scissor', () => {
    cy.get('.scissor-button').click()
    cy.get('#winner').should('contain', "It's a tie!")
    cy.get('[data-cy="points"]').should('contain', "Your points: 0").and('contain', "Computer's points: 0")
  })
})