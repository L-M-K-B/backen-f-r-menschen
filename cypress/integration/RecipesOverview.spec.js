// 1. Arrange - set up initial app state
// 2. Act - interact with chosen element
// 3. Assert - make an assertion about app content

describe('Test that`s checking page content', function() {
  it('Visits the scientific baking page', function() {
    cy.visit('http://localhost:3000');
    cy.contains('List of Recipes');
    cy.contains('Filters');
    cy.contains('Snicker Doodles');
  });
});

describe('Check of link to a single recipe', function() {
  it('checks the link to snicker doodles', function() {
    cy.visit('http://localhost:3000')
      .contains('Snicker Doodles')
      .click()
      .url()
      .should('include', '/recipe/5cf17bb08965831bf2a9bb8f');
  });
  it('writes test content in textarea', function() {
    cy.get('textarea')
      .should('have.length', 1)
      .type('test content')
      .should('have.value', 'test content');
  });
  it('saves notes in textarea', function() {
    cy.get('button')
      .contains('Save my notes')
      .click();
  });
  it('checks availability of notes after reload', function() {
    cy.reload()
      .get('textarea')
      .should('have.value', 'test content');
  });
});

/*describe('Checks notes area', function() {
  it('writes test content in textarea', function() {
    const testData = 'test content';
    cy.visit('http://localhost:3000/recipe/5cf17bb08965831bf2a9bb8f');
    cy.get('textarea').should('have.length', 0);
  });
});*/
