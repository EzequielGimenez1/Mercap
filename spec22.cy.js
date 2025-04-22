describe('Login Test - Campos Vacíos', () => {
  it('debe mostrar error al dejar los campos vacíos', () => {
    cy.visit('https://mercapabbaco.com') // URL
    cy.get('button[type="submit"]').click() // enviar el formulario sin llenar nada

    // Verificar que el sistema muestre un mensaje de error indicando que el correo y la contraseña son obligatorios
    cy.contains('El correo electrónico es obligatorio') // Verificar error para el email
    cy.contains('La contraseña es obligatoria') // Verificar error para la contraseña
  })
})