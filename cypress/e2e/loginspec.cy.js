import userData from '../fixtures/userData.json'

describe('Orange Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordFiel: "[name='password']",
    loginbutton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrip:".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }


  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordFiel).type(userData.userSucess.password)
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //utilizado para encontrar algo na url para garantir que acessou apos click
    cy.get(selectorsList.dashboardGrip)
    })
    it('Login - fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordFiel).type(userData.userFail.password)
      cy.get(selectorsList.loginbutton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      })
})