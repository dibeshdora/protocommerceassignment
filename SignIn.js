describe('Gmail Sign-in', function()
		{
	     var obj=require("./JsObjects.js");
	     
	     beforeEach(function(){
		    	obj.getURL();
		    });
	     it('Sign In with registered user name', function(){
	    	 
	    	 element(by.css("input[class*='whsOnd zHQkBf']")).sendKeys('dibeshduniq') ;
	    	 element(by.css("span[class*='RveJvd snByac']")).click();
	    	 browser.sleep(5000);
	    	 element(by.css("input[class*='whsOnd zHQkBf']")).sendKeys('India@8173');
	    	 element(by.css("span[class*='RveJvd snByac']")).click();
	    		 	    	 	
	    	 })
	     
	     afterEach(function(){
		    	console.log("Test Passed")
		    });
		})