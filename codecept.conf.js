exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
   

    Puppeteer: {
      url: 'https://www.skysports.com/',
      // waitForNavigation: 'networkidle2',
      chrome: {
        args: ['--no-sandbox']
      },
      show: !process.env.ENVIRONMENT,
      windowSize: '1200x1000',
      restart: false,
      keepBrowserState: true,
      keepCookies: true
    }
  },
  plugins: {
    "allure": {
      "enabled": true
    },
   
    "helpers": {
      "Mochawesome": {
          "uniqueScreenshotNames": "true"
      },
      "mocha": {"uniqueScreenshotNames": "true",
        "reporterOptions": {
          "mochaFile": "output/result.xml"
        }
      },
    
    },
},

  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'autotest'
}