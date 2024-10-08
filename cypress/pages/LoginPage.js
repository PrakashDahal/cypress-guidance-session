import LoginElements from "../helper/LoginElements";

function visitLoginPage(){
    cy.visit(LoginElements.defaultUrl)
}


function enterUserName(email){
    cy.get(LoginElements.userNameSelector).type(email)
}

function enterPassword(password){
    cy.get(LoginElements.passwordSelector).type(password)
}
function submitLogin(){
cy.get(LoginElements.loginButtonSelector).click();
}

function makeLogin(email="standard_user", password="secret_sauce"){
    visitLoginPage()
    enterUserName(email)
    enterPassword(password)
    submitLogin()
}

function checkUserNameRequired(){
    cy.get('[data-test="error"]').should('contain', 'Username is required')
}

const LoginPage = {
    visitLoginPage,
    enterUserName,
    enterPassword,
    submitLogin,
    makeLogin,
    checkUserNameRequired
}

export default LoginPage;