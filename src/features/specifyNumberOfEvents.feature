Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the page has fully loaded the events
    When the user loads the list of events without specifying number of events
    Then up to 32 events are shown by default

  Scenario: User can change the number of events they want to see
    Given the page has fully loaded the events
    When the user specifies the number of events per page 
    Then the specified number of events populate on the screen