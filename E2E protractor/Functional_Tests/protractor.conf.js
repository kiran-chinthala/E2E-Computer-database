var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');


var reporter = new HtmlScreenshotReporter({
  dest: 'reports/lastrun',
  filename: 'report.html',
  reportTitle: 'Protractor Test Report',
  cleanDestination: true,
  showSummary: false,
  showConfiguration: false

});
	
exports.config = {
    baseUrl:"http://computer-database.herokuapp.com/computers",
    framework: 'jasmine2',
	jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 90000
	},
	allScriptsTimeout: 90000,
	getPageTimeout: 90000,
	suites: {
    awscreatereports: 'Functional_Modules/Computerdetails.js'
    },
    capabilities: {
        'browserName': 'chrome',
        chromeOptions: {
            args: [ "no-sandbox", "--disable-gpu", "--window-size=800x600" ]
        },
        'chromeOnly': 'true',
        'loggingPrefs': {
            'driver': 'ALL',
            'server': 'ALL',
            'browser': 'ALL'
        }
    },
    onPrepare: function() {
		
		jasmine.getEnv().addReporter(reporter);
    	jasmine.DEFAULT_TIMEOUT_INTERVAL = 900000;

    },
	
   
  beforeLaunch: function() {
    return new Promise(function(resolve){
      reporter.beforeLaunch(resolve);
    });
  },
	afterLaunch: function(exitCode) {
    return new Promise(function(resolve){

    });
  }
  
};
