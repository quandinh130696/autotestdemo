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


  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      reportDir: './output',
    },

  },
  bootstrap: null,
  name: 'demo'
}