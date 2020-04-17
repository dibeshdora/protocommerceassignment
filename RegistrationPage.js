describe('Registration Page', function()
		{
	     var obj=require("./JsObjects.js");
	     var d=require("./data.js");
		 var using=require('jasmine-data-provider');
         
		 beforeEach(function(){
	    	     obj.getUrl();
	              })
	      
	     using(d.Datadriven, function(data,description){
	     it('open registration page', function(){
	    	 
	    	 obj.name.sendKeys(data.Name);
	    	 obj.email.sendKeys(data.email);
	    	 obj.password.sendKeys(data.pass);
	    	 obj.checkbox.click();
	    	 obj.gender.click();
	    	 obj.status.click();
	    	 obj.dob.sendKeys(data.dob);
	    	 
	    	 element(by.buttonText("Submit")).click().then(function(){
	    		 element(by.css("div[class*='alert-success']")).getText().then(function(text){
	    			 expect(text).toMatch("Success! The Form has been submitted successfully!")
	    			 console.log(text);
	    		 })
	    	 })
	       }) 
	     })
	     afterEach(function(){
		    	console.log("Test Passed")
		    })
		})