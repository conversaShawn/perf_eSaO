const modKey = Cypress.platform === 'darwin' ? 'cmd' : 'ctrl'

Cypress.Commands.add('openQuickInsertMenu', () => {
  Cypress.log({
    name: 'openQuickInsertMenu',
  })
  cy.get('body').type(`{${modKey}+k}`)
  cy.get('[data-test-id=quick-insert-menu-list]').should('be.visible')
})

Cypress.Commands.add('getByTestId', (id, opts = {}) => {
  Cypress.log({
    name: 'getByTestId',
  })
  return cy.get(`[data-test-id="${id}"]`, opts)
})
