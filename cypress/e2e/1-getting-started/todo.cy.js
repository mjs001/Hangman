describe("pressing key greys it out", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
    cy.get(`[id="a"]`).should("exist").click();
    cy.get(`[id="b"]`).should("exist").click();
    cy.get(`[id="a"]`).should("have.css", "color");
  });
});
