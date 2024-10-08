import LoginPage from "../pages/LoginPage";
import { getRandomString } from "../utils/Ramdom";

describe('Login Test', () => {
  it('blank case', () => {
    LoginPage.visitLoginPage();
    LoginPage.submitLogin();
   LoginPage.checkUserNameRequired();
  })

  it('email only case', () => {
    LoginPage.visitLoginPage();
    LoginPage.enterUserName("Helooooo")
    LoginPage.submitLogin();

    cy.get('[data-test="error"]').should('contain', 'Password is required')
  })

  it('invalid case', () => {
    cy.login(getRandomString(5), "Prakash")
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  })

  it('valid case', () => {
    cy.login();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
  })
})