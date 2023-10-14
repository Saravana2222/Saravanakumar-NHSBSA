/// <reference types= "cypress" /> 

class ResultPage {

    get Page_elements() {
        return require('../locators/locators.js')
    }

    verifyResult(text){
        cy.get(this.Page_elements.result_header).then((el) => {
            cy.log(el.text());
            expect(el.text()).to.contain(text);
        })
    }

}
export default ResultPage;