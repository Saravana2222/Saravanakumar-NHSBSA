import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import start_page from '../pages/StartPage.js';
import questionare_page from '../pages/QuestionnairePage.js';
import result_page from '../pages/ResultPage.js';


const startPage = new start_page();
const questionarePage = new questionare_page();
const resultPage = new result_page();

let testData;

before(()=> {
    cy.fixture('testData.json').then((data) => {
        testData = data;
    });
     
});

Given('I am on the check for help paying NHS costs website', () => { 
    cy.visit(testData.nhs_CostOnlineService_url);
    startPage.acceptCookies(); 
    startPage.clickStartNow(); 
});

And('I start NHS Cost Online Service', () => { 
    startPage.clickStartNow(); 
});

And('I select living country as {string}', (value) => { 
    questionarePage.selectOptions(value);
    questionarePage.clickOnNext();
});

And('I select my GP Practice', () => { 
    questionarePage.selectOptions(testData.gp_practice_Scotland_or_Wales);
    questionarePage.clickOnNext();
});

And('I select my dental practice country as {string}', (value) => { 
    questionarePage.selectOptions(value);
    questionarePage.clickOnNext();
});

And('I enter my date of birth', () => { 
    questionarePage.enterDateOfBirth(testData.date_of_birth);
    questionarePage.clickOnNext();
});

And('I select my living status with partner', () => { 
    questionarePage.selectOptions(testData.living_with_partner);
    questionarePage.clickOnNext();
});

And('I select benefits or tax credits claim status', () => { 
    questionarePage.selectOptions(testData.claiming_benefits_or_tax_credits);
    questionarePage.clickOnNext();
});

And('I select pregnancy or given birth status', () => { 
    questionarePage.selectOptions(testData.pregnant_or_given_birth);
    questionarePage.clickOnNext();
});

And('I select the status for injury or illness caused by serving in the armed forces', () => { 
    questionarePage.selectOptions(testData.injury_or_illness);
    questionarePage.clickOnNext();
});

And('I select my diabetes status', () => { 
    questionarePage.selectOptions(testData.diabetes);
    questionarePage.clickOnNext();
});

And('I select the condition or treatment', () => { 
    questionarePage.selectOptions(testData.condition_or_treatment);
    questionarePage.clickOnNext();
});

And('I select my glaucoma status', () => { 
    questionarePage.selectOptions(testData.glaucoma);
    questionarePage.clickOnNext();
});

And('I select the care home living status', () => { 
    questionarePage.selectOptions(testData.living_in_carehome);
    questionarePage.clickOnNext();
});

And('I select savings investments or property status', () => { 
    questionarePage.selectOptions(testData.savings_investments_property);
    questionarePage.clickOnNext();
});

And('I verify {string} is displayed', (text) => { 
    resultPage.verifyResult(text);
});

And('I select Highlands and Islands living status', () => { 
    questionarePage.selectOptions(testData.Highlands_and_Islands_living_status);
    questionarePage.clickOnNext();
});


