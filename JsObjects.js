function objects(){
	 
	this.name=element(by.name("name"));
	this.email=element(by.name("email"));
   	this.password=element(by.id("exampleInputPassword1"));
   	this.checkbox=element(by.id("exampleCheck1"));
   	this.gender=element.all(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female"));
   	this.status=element.all(by.name("inlineRadioOptions")).get(1);
   	this.dob= element.all(by.name("bday"));
   	
   	this.getURL=function(){
   		browser.get('https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin');
   	}
   	
   	this.getUrl=function(){
   		browser.get("https://qaclickacademy.github.io/protocommerce/");
   	}
	    
}
module.exports=new objects();