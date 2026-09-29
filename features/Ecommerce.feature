Feature: Ecommerce Validation
 @Regression
  Scenario: Placing the order
    Given a login to ecommerce application  with "mehu1414@gmail.com" and "Mehu@123"
    When add "ZARA COAT 3" to Cart
    Then Verify "ZARA COAT 3" is displayed in the Cart
    When Enter valid details and Place the Order
    Then Verfiy order is present in OrderHistoryPage

    
Feature: Ecommerce Validation
@foo  // here both of them are tags used duing execution
  Scenario Outline: Placing the order
    Given a login to ecommerce application  with "<username>" and "<password>"
    Then Verify error message is displayed  

    Example:
    | username          | password |
    |mehu1414@gmail.com | ADSAD    |
    |hello@1@gmail.com  | AD11SAD  |