import userData from '../fixtures/userData.json'

describe('Orange Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordFiel: "[name='password']",
    loginbutton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrip:".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton:"[href='/web/index.php/pim/viewMyDetails']"
  }


  it.only('User Info Update- success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordFiel).type(userData.userSucess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //utilizado para encontrar algo na url para garantir que acessou apos click
    cy.get(selectorsList.dashboardGrip)
    cy.get(selectorsList.myInfoButton).click()
    })
    it('Login - fail', () => {
      cy.visit('/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordFiel).type(userData.userFail.password)
      cy.get(selectorsList.loginbutton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      })
})