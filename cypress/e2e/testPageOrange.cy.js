describe("Test Page Orange", () => {
 beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  })

it("should loging and valide the page",()=>{

    cy.get(".orangehrm-login-branding > img").should("be.visible")
    cy.get(":nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label").should("be.visible")
    cy.get('[name="username"]').should("be.visible")
    cy.get(".orangehrm-copyright-wrapper > :nth-child(1)").should("be.visible")
    cy.get(".oxd-button").should("be.visible")
    cy.get('[name="username"]').type("Admin")
    cy.get('[name="password"]').type("admin123")
    cy.get(".oxd-button").click()
    cy.get(".oxd-userdropdown-name").should("be.visible")
    cy.get(":nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text").contains("Time at Work")


})

})
