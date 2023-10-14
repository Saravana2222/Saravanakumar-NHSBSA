Feature: Test 'User Story - Get help with paying for NHS costs online service'

  Background:
    Given I am on the check for help paying NHS costs website
    And I start NHS Cost Online Service

  Scenario: I am living in England and verify the NHS costs online service.
    Given I select living country as 'england'
    And I select my GP Practice 
    And I select my dental practice country as 'england'
    And I enter my date of birth
    And I select my living status with partner
    And I select benefits or tax credits claim status
    And I select pregnancy or given birth status
    And I select the status for injury or illness caused by serving in the armed forces
    And I select my diabetes status
    And I select the condition or treatment
    And I select my glaucoma status
    And I select the care home living status
    And I select savings investments or property status
    Then I verify 'You could get help to pay for your NHS costs' is displayed


  Scenario: I am living in Scotland and verify the NHS costs online service.
    Given I select living country as 'scotland'
    And I select Highlands and Islands living status 
    And I select my dental practice country as 'scotland'
    And I enter my date of birth
    And I select my living status with partner
    And I select benefits or tax credits claim status
    And I select pregnancy or given birth status
    And I select the status for injury or illness caused by serving in the armed forces
    And I select the care home living status
    And I select savings investments or property status
    Then I verify 'You get help with NHS costs' is displayed


  Scenario: I am living in Wales and verify the NHS costs online service.
    Given I select living country as 'wales'
    And I select my GP Practice 
    And I select my dental practice country as 'wales'
    And I enter my date of birth
    And I select my living status with partner
    And I select benefits or tax credits claim status
    And I select pregnancy or given birth status
    And I select the status for injury or illness caused by serving in the armed forces
    And I select my diabetes status
    And I select my glaucoma status
    And I select the care home living status   
    And I select savings investments or property status
    Then I verify 'You get help with NHS costs' is displayed


  Scenario: I am living in Northern Ireland and verify the NHS costs online service.
    Given I select living country as 'nire'
    Then I verify 'You cannot use this service because you live in Northern Ireland' is displayed
