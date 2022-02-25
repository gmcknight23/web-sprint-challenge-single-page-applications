describe("Quotes App", () => {
  beforeEach(() => {
    // Each test needs fresh state!
    // Tests should NEVER rely on state left over from previous tests
    // Every test should able to work in isolation
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get("input[name=name]");
  const topping1 = () => cy.get("input[name=pepperoni]");
  const topping2 = () => cy.get("input[name=sausage]");
  const form = () => cy.get("form");
  const size = () => cy.get("select");

  it("can type in the inputs", () => {
    nameInput()
      .should("have.value", "")
      .type("Greg")
      .should("have.value", "Greg");
  });

  it("can select multiple toppings", () => {
    topping1().should("not.be.checked").check().should("be.checked");
    topping2().should("not.be.checked").check().should("be.checked");
  });

  it("can submit the form", () => {
    size.select("Small").should("have.value", "small");
  });
});
