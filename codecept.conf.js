exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {

    Puppeteer: {
      url: 'https://www.skysports.com/',
      chrome: {
        args: ['--no-sandbox']
      },
      show: !process.env.ENVIRONMENT,
      windowSize: '1200x1000',
      restart: false,
      keepBrowserState: true,
      keepCookies: true
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },
  },
  "plugins": {
    "allure": {
    }
},

  include: {
    I: './steps_file.js'
  },
  
  "mocha": {
    "reporterOptions": {
      "mochaFile": "./output/result.xml"
  }
},
  bootstrap: null,
  name: 'demo'
}