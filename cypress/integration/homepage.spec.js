describe('Homepage', () => {
  it('should load successfully', () => {
    cy.visit('index.html');
    cy.contains('My CI/CD Demo Site');
    cy.get('#colorButton').should('be.visible');
  });
  
  it('should change heading color when button is clicked', () => {
    cy.visit('index.html');
    const initialColor = cy.get('h1').invoke('css', 'color');
    cy.get('#colorButton').click();
    cy.get('h1').should(($h1) => {
      expect($h1.css('color')).not.to.eq(initialColor);
    });
  });
});
