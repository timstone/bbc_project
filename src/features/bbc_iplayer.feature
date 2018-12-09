Feature: BBC iplayer search
  As a fan of Eastenders 
  I want to quickly find on the iplayer when the next programme is on
  So I don't miss a minute of my favourite show

  Scenario: Searching time of next espisode of Eastenders on the Eastenders home page from bbc website
    Given I open the home page
      And I search for Eastenders
     When I choose the Eastenders home page
     Then I will be able to see what time the next episode is

  Scenario: A partial search of Eastenders finds the programmes next episode time
    Given I open the home page
      And I do a partial search for Easte
     When I choose Eastenders from the search options
      And I choose the Eastenders home page
     Then I will be able to see what time the next episode is
