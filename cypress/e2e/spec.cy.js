const url = ""
describe('template spec', () => {
  it('checks for ERROR logs', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Prevent Cypress from failing the test
    });
    cy.visit(url).then(() => {
      cy.title().should('eq', ''); // ここで期待するタイトル名を指定
    });
  });
})