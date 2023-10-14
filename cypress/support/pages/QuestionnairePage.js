class QuestionarePage {

    get Page_elements() {
        return require('../locators/locators.js')
    }

    selectOptions(value) {
        let optionValue = '#label-' + value;
        cy.get(optionValue).prev().check();
    }

    clickOnNext(){
        cy.get(this.Page_elements.next_btn).click()
    }

    enterDateOfBirth(Date){
        let inputDate = Date.split('-');
        cy.get(this.Page_elements.date_txt_box).type(inputDate[0]);
        cy.get(this.Page_elements.month_txt_box).type(inputDate[1]);
        cy.get(this.Page_elements.year_txt_box).type(inputDate[2]);
    }


}

export default QuestionarePage;