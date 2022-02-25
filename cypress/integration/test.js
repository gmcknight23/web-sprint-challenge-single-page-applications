it("sanity check", () => {
  expect(3 + 5).to.equal(8);
});

describe("form stuff", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it('test that you can add text to the box', ()=>{
      const text = ()=> cy.get('input[name='name-input']')
  })
});
