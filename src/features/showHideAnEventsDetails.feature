Feature: Show/Hide an events detail

Scenario: An event element is collapsed by default
Given the page has fully loaded the events
And app loaded
When the user opens the application
Then the user should see all the events in the city but not the details

Scenario: User can expand an event to see its details
Given the event detail is true
When user click the event 
Then event box expands and shows the details

Scenario: User can collapse an event to hide its details.
Given event details box has expanded
When the user clicks the collapse button
Then event box collapses and hides the details