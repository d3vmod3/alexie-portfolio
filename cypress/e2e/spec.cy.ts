describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("a", "Portfolio").click();
    cy.url().should("include", "/portfolio");
    cy.get("h1").should("have.text", "Portfolio");
  });
});
