describe('Login Test - Restablecer Contraseña', () => {
    it('redirigir a la página de restablecimiento de contraseña', () => {
      cy.visit('https://mercapabbaco.com/') // 
      cy.get('a').contains('Forgot password?').click() // restablecimiento de contraseña
  
      // Verificar que la URL cambie a la página de restablecimiento de contraseña
      cy.url().should('include', 'https://auth.mercapabbaco.com/u/reset-password/request/Username-Password-Authentication?state=hKFo2SBsY2NEcl9PSjFRbjM5NVZySmJua2tlQVlQUDZPNHUtaqFurnJlc2V0LXBhc3N3b3Jko3RpZNkgN29KT0NUZzBST3RrQWhfTi1aNXhGQnByUnpGdVJtRDCjY2lk2SAzTTNIY3M1SGxVd3R4bkoyb2tiNHpaYTVGaGg0RXE0MA') // 
    })
  })
