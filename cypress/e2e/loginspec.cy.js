describe('Orange Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordFiel: "[name='password']",
    loginbutton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']"
  }

  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordFiel).type('admin123')
    cy.get(selectorsList.loginbutton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //utilizado para encontrar algo na url para garantir que acessou apos click
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
    })
    it('Login - fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorsList.usernameField).type('Admin1')
      cy.get(selectorsList.passwordFiel).type('admin123')
      cy.get(selectorsList.loginbutton).click()
      cy.get(selectorsList.wrongCredentialAlert)
      })
})