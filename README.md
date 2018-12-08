# BBC iplayer testing


## Pre-requisites
- Node 8
- Chrome driver (http://chromedriver.chromium.org/home)

## Configuration

1. Clone the repo and run `npm install`
2. Add a valid `BROWSERSTACK_USERNAME` and `BROWSERSTACK_AUTH_KEY` to your environment variables to enable that integration.


## Usage

By default, the kit is set up to run tests using the `npm test` command.

You can also lint your code with `npm run lint`.

## This template includes:

- [Examples, with Page Objects](#examples)
- [Chai with `expect` global](http://chaijs.com/guide/styles/#expect)
- [Chai WebdriverIO](https://github.com/marcodejongh/chai-webdriverio)
- [Browserstack integration](http://webdriver.io/guide/services/browserstack.html)
- [Visual Regression Tests](http://webdriver.io/guide/services/visual-regression.html)
- [ESLint](http://eslint.org/) using [Standard style]
- [WebdriverIO tuned Gitignore file]


## More Details

### Folder Structure

Cucumber features go in the `src\features` folder with `.feature` extension.

Tests and page objects go in the `\spec\js\step_definitions\` folder and `\spec\js\pages` respectivly, which you'll need to create.

Name tests with a `.step.js` extension. For example: `mytest.step.js`

Name Page Object files with a `.page.js` extention.  For example: `mypageobject.page.js`

Visual regression screenshots will be saved to the `screenshots` folder.

### Debug Command Line Flag to adjust timeout

By setting the 'DEBUG' environment variable to true, the test timeout with be essentially removed, allowing you to run [the `debug` command](https://www.youtube.com/watch?v=xWwP-3B_YyE&lc=z12gw1vqpu2sunjeq222hrsxstf3glohh04) without your tests timing out. 

`DEBUG=true npm test`

### Configuration file flavors

By default, tests will run locally:
`npm test`

To run the tests using Browserstack, run:

`npm run bstest`

## Configurations

[WebdriverIO configurations](http://webdriver.io/guide/testrunner/gettingstarted.html) can be passed in via a double-dash (i.e. `--`).

For example, to run a single test file, use the WDIO `spec` flag: `npm test -- --spec=login`

The double dash indicates that the remaining options should be sent to the command that NPM is running, not NPM itself.

In the previous example everything after `--` goes to WDIO.

A few more examples:

To change the log level, pass in a `--logLevel` flag: `npm test -- --logLevel=verbose`

To specify a certain web server, pass in a `baseUrl` flag: `npm test -- --baseUrl=http://url.of.server`
