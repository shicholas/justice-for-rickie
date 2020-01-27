describe('Visiting /', function () {
  it('shows that datavant.com is running locally', function () {
    cy.visit('http://localhost:8000');
    cy.contains('Contact').click();
  });
});
