import userData from '../fixtures/userData.json'

describe('Orange Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginbutton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrip:".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name=firstName]",
    lastNameField: "[name=lastName]",
    middleNameField:"[name='middleName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    otherId: "(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')",
    closeButton:".--close",
    saveButton:"[type='submit']",
    selectArrowButton: ".oxd-select-text--arrow",
    thirItenSelectArrow: ':nth-child(3) > span',
    fifthItenSelectArrow: ':nth-child(5) > span'

  }


  it.only('User Info Update- success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //utilizado para encontrar algo na url para garantir que acessou apos click
    cy.get(selectorsList.dashboardGrip)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.genericField).eq(4).clear().type('teste123 ')
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('Othe id teste')
    cy.get(selectorsList.genericField).eq(5).clear().type('123456')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-03-06')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.dateField).eq(1).clear().type('2025-03-06')
    cy.get(selectorsList.closeButton).click()
    cy.get(selectorsList.selectArrowButton).eq(0).click()
    cy.get(selectorsList.fifthItenSelectArrow).click()
    cy.get(selectorsList.selectArrowButton).eq(1).click()
    cy.get(selectorsList.thirItenSelectArrow).click()
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
 
    
    
    })
    it('Login - fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordFiel).type(userData.userFail.password)
      cy.get(selectorsList.loginbutton).click()
      cy.get(selectorsList.wrongCredentialAlert)
        
      })
})