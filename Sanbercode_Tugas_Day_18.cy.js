context('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  describe('Failed Login Test', () => {
    it('Invalid Password', () => {
      //Steps
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("invalid_password")
      cy.get('[data-test="login-button"]').click()
      //Assertion
      cy.get('[data-test="error"]')
      cy.should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
    it('Invalid Username', () => {
      //Steps
      cy.get('[data-test="username"]').type("invalid_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      //Assertion
      cy.get('[data-test="error"]')
      cy.should('have.text','Epic sadface: Username and password do not match any user in this service')
    })
  })

  describe('Locked Out User Login Test', () => {
    it('Locked Out Login', () => {
      //Steps
      cy.get('[data-test="username"]').type("locked_out_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      //Assertion
      cy.get('[data-test="error"]')
      cy.should('have.text','Epic sadface: Sorry, this user has been locked out.')
    })
  })

  describe('Successfull Login', () => {
    it('standard_user Login', () => {
      //Steps
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      //Assertion
      cy.url().should('include','/inventory.html')
    })
    it('problem_user Login', () => {
      //Steps
      cy.get('[data-test="username"]').type("problem_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      //Assertion
      cy.url().should('include','/inventory.html')
    })
    it('performance_glitch_user Login', () => {
      //Steps
      cy.get('[data-test="username"]').type("performance_glitch_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      //Assertion
      cy.url().should('include','/inventory.html')
    })
  })

  describe('Successfull Logout', () => {
    it('standard_user Logout', () => {
      //Steps
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('#react-burger-menu-btn').trigger('mouseover').click()
      cy.get('#logout_sidebar_link').click()
      //Assertion
      cy.get('.login_wrapper-inner').should('be.visible')
    })
    it('problem_user Logout', () => {
      //Steps
      cy.get('[data-test="username"]').type("problem_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('#react-burger-menu-btn').trigger('mouseover').click()
      cy.get('#logout_sidebar_link').click()
      //Assertion
      cy.get('.login_wrapper-inner').should('be.visible')
    })
    it('performance_glitch_user Logout', () => {
      //Steps
      cy.get('[data-test="username"]').type("performance_glitch_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('#react-burger-menu-btn').trigger('mouseover').click()
      cy.get('#logout_sidebar_link').click()
      //Assertion
      cy.get('.login_wrapper-inner').should('be.visible')
    })
  })
})