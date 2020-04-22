var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['RegistrationPage.js','ShoppingPage.js'],

onPrepare: function(){
	
	 //browser.waitForAngularEnabled(false);
	 browser.driver.manage().window().maximize();
	
	jasmine.getEnv().addReporter(
	        new Jasmine2HtmlReporter({
	          savePath: 'target/screenshots'
	        })
	      )
},
/*suite:
	{
	regression:['RegistrationPage','ShoppingPage.js']
	}*/
};
