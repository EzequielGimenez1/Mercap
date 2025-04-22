describe('Login Test - Crear Cuenta', () => {
    it('redirigir a la página de registro', () => {
      cy.visit('https://mercapabbaco.com/')
      cy.get('a').contains('Sign up').click() //click en "Crear cuenta"
  
      // Verificar que la URL cambie a la página de registro
      cy.url().should('include', '/u/signup') // URL debe coincidir con la de registro
    })
  })