const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('I open the home page', function() {
  browser.url('/');
})

Given(/^I search for (.*)/, function(searchName) {
  browser.setValue("#orb-search-q", searchName);
})

When('I choose Eastenders from the search options', function() {
  // waits for search to complete
  browser.waitForExist('#suggestion-0', 1000);
  browser.click('#suggestion-0');
})

When('I choose the Eastenders home page', function() {
  browser.click('#search-result-0~ div a');
})

When('I will be able to see what time the next episode is', function() {
  var episode = browser.getText(".broadcast-details > span:nth-of-type(2)");
  console.log(episode);
  expect(episode).to.exist;
})

