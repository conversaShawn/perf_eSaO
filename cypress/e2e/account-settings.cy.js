describe('Tests', () => {
  const accountSettingsLabel = 'Account settings'
  const openAccountSettingsFromDashboard = () => {
    cy.get('.title-bar-headline-icon').click()
    cy.contains('Your account').click()
    cy.get('.account-settings .modal-body').should('be.visible')
  }

  beforeEach(() => {
    cy.visit('/')
    cy.get('.passwordless-continue-password a').click()
    cy.get('[type=email]').type('helena+cy1@pitch.io')
    cy.get('[type=password]').type('Cypressissue?')
    cy.get('button').click()
    cy.get('[data-test-id=dashboard-templates-teaser-grid]').children().should('have.length.above', 1)
  })

  it('test 1', () => {
    cy.openQuickInsertMenu()
    cy.get('.list-items .popover-item')
        .first()
        .should('be.visible')
        .and('not.contain', accountSettingsLabel)
    cy.getByTestId('quick-insert-menu-search-input').type(accountSettingsLabel)
    cy.getByTestId('quick-insert-menu-list').contains(accountSettingsLabel).click()
    cy.get('.account-settings .modal-body').should('be.visible')
  })

  it('test 2', () => {
    cy.get('.dashboard-grid > .presentation-card:nth-child(1)').click()
    cy.url().should('include', '/presentation/')
    cy.get('.canvas #edit-layer').should('be.visible')
    cy.getByTestId('slide-picker-toggle').click()
    cy.getByTestId('slide-picker-template-slides').should('be.visible')
  })

  it('test 3', () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    const newName = 'New awesome name' + random
    const saveChangesButton = 'Save changes'

    openAccountSettingsFromDashboard()

    cy.getByTestId('account-settings-go-to-name').click()
    cy.get('.edit-name').click()
    cy.get('.modal-controls .button')
        .should('be.visible')
        .and('be.disabled')
        .and('have.text', saveChangesButton)
    

    cy.get('input.custom-name').clear().type(newName)
    cy.get('.modal-controls .button').click()
    cy.get('.modal-controls .button').should('be.visible').and('be.disabled')

    cy.get('.current-name .current-value').should('be.visible').and('have.text', newName)
    cy.get('.close-modal').click()
    cy.get('.title-bar-headline-secondary').should('be.visible').and('have.text', newName)
  })

  it('test 4', () => {
    const subscribedAllLabel = 'Subscribed to all'
    const notificationsLabel = 'Email preferences'
    openAccountSettingsFromDashboard()

    
      cy.get('[data-test-id=account-settings-go-to-notifications] .value').should(
        'have.text',
        subscribedAllLabel
      )
      cy.get('[data-test-id=account-settings-go-to-notifications] .title')
        .should('have.text', notificationsLabel)
        .click({force:true})
    
    cy.get('.account-property-row input').each((checkbox) => cy.wrap(checkbox).should('be.checked'))
    cy.get('.checkbox').click({ multiple: true })
    cy.get('.account-property-row input').each((checkbox) => cy.wrap(checkbox).should('not.be.checked'))

    cy.get('.arrow-left').click()
    cy.get('[data-test-id=account-settings-go-to-notifications] .value').should('have.text', 'Off')

    cy.get('[data-test-id=account-settings-go-to-notifications] .title')
        .should('have.text', notificationsLabel)
        .click()
    cy.get('.account-property-row input').each((checkbox) => cy.wrap(checkbox).should('not.be.checked'))
    cy.get('.checkbox').click({ multiple: true })
    cy.get('.account-property-row input').each((checkbox) => cy.wrap(checkbox).should('be.checked'))
  })

  it('test 5', () => {
    cy.get('.dashboard-grid > .presentation-card:nth-child(1)').click()
    cy.url().should('include', '/presentation/')
    cy.get('.canvas #edit-layer').should('be.visible')
    cy.getByTestId('slide-picker-toggle').click()
    cy.getByTestId('slide-picker-template-slides').should('be.visible')
  })

  it('test 6', () => {
    cy.openQuickInsertMenu()
    cy.get('.list-items .popover-item')
        .first()
        .should('be.visible')
        .and('not.contain', accountSettingsLabel)
    cy.getByTestId('quick-insert-menu-search-input').type(accountSettingsLabel)
    cy.getByTestId('quick-insert-menu-list').contains(accountSettingsLabel).click()
    cy.get('.account-settings .modal-body').should('be.visible')
  })

  it('test 7', () => {
    cy.get('.dashboard-grid > .presentation-card:nth-child(1)').click()
    cy.url().should('include', '/presentation/')
    cy.get('.canvas #edit-layer').should('be.visible')
    cy.getByTestId('slide-picker-toggle').click()
    cy.getByTestId('slide-picker-template-slides').should('be.visible')
  })

  it('test 8', () => {
    cy.get('.dashboard-grid > .presentation-card:nth-child(1)').click()
    cy.url().should('include', '/presentation/')
    cy.get('.canvas #edit-layer').should('be.visible')
    cy.getByTestId('slide-picker-toggle').click()
    cy.getByTestId('slide-picker-template-slides').should('be.visible')
  })
})
