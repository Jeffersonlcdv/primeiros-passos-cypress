describe('template spec', () => {
  it('Login - success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index') //utilizado para encontrar algo na url para garantir que acessou apos click
    cy.get('.oxd-topbar-header-breadcrumb-module').contains('Dashboard')
    })
    it('Login - fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("[name='username']").type('Admin1')
      cy.get("[name='password']").type('admin123')
      cy.get("[type='submit']").click()
      cy.get("[role='alert']")
      })
})