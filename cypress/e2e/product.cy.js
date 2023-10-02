describe('product spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should search empty term', () => {
    cy.get('.search-field-input').clear();
    cy.get('.search-field-button').click();
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('.home-container').should('have.length', 1);
  });

  it('should search a product category', () => {
    cy.get('.search-field-input').type('notebook');
    cy.get('.search-field-button').click();
    cy.get('.breadcrumbs').find('li').should('have.length', 3);
    cy.get('.breadcrumbs').contains('Computación');
    cy.get('.breadcrumbs').contains('Laptops y Accesorios');
    cy.get('.breadcrumbs').contains('Notebooks');
    cy.get('.product-list-item').should('have.length', 4);
    cy.get('.product-list-item').first().click();
    cy.url().should('eq', 'http://localhost:3000/items/MLA1369506689');
  });

  it('should search a product id', () => {
    cy.get('.search-field-input').type('MLA1136594401');
    cy.get('.search-field-button').click();
    cy.url().should('eq', 'http://localhost:3000/items/MLA1136594401');
    cy.get('.breadcrumbs').find('li').should('have.length', 3);
    cy.get('.breadcrumbs').contains('Computación');
    cy.get('.breadcrumbs').contains('Laptops y Accesorios');
    cy.get('.breadcrumbs').contains('Notebooks');
    cy.get('.product-title').contains('Notebook Dell Inspiron 3502');
    cy.get('.product-price').contains('$ 479.999');
    cy.get('.description-title').contains('Descripción del producto');
    cy.get('.description-content').contains(
      'Los equipos Dell se destacan por ofrecer soluciones reales para cada una de las necesidades.',
    );
    cy.get('.primary-btn').contains('Comprar');
  });
});
