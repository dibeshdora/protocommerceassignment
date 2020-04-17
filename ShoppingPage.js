		describe('Shopping Page', function()
		{
	     function selectItems(product)
	     {
	    	 element.all(by.tagName("app-card")).each(function(item)
	    			 {
	    		     item.element(by.css("h4 a")).getText().then(function(text)
	    		    		 {
	    		    	      if(text==product)
	    		    	    	  {
	    		    	    	  item.element(by.css("button[class*='btn btn-info']")).click();
	    		    	    	  }
	    		             })
	    			 })
	     }
	     it('open Shopping page', function(){
	    	 
	    	 browser.driver.manage().window().maximize();
	    	 browser.get("https://qaclickacademy.github.io/protocommerce/");
	    	 
	    	 element(by.linkText("Shop")).click();
	    	 
	    	 selectItems("Blackberry");
	    	 selectItems("iphone X");
	    	 selectItems("Samsung Note 8");
	    	 
	    	 element(by.css("a[class*='nav-link btn btn-primary']")).getText().then(function(text) {
				var x=text.split("(");
				
				
				
				expect(x[1].trim().charAt(0)).toBe("3");
			})
			element(by.css("a[class*='nav-link btn btn-primary']")).click();
	    	 
	    	element(by.xpath("//td[@class='text-right']//h3")).getText().then(function(text) {
                
	    		expect(text).toBe("₹. 235000");
	    		console.log(text);	    	 	
	    	 });
	    	
	    	 /*element.all(by.tagName("td")).each(function(item)
	    			 {
	    		     item.element(by.className("col-sm-1 col-md-1 text-center")).getText().then(function(text)
	    		    		     {
	    		    		    	   console.log(text);
	    		    		     });
	       
	    			 })*/

	     })
		})