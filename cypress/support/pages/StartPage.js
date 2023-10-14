/// <reference types= "cypress" /> 
class StartPage {

    get Page_elements() {
        return require('../locators/locators.js')
    }

    acceptCookies(){
        cy.get(this.Page_elements.accept_cookies_btn).click(); 
        //cy.xpath(this.Page_elements.hide_cookies_btn).click(); 
    }

    clickStartNow(){
        cy.get(this.Page_elements.start_now_btn).click(); 
    }

    


}
export default StartPage;