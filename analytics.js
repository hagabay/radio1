document.addEventListener("deviceready", init, false);
var myAnalyticsAccount = "UA-66840604-1";

var testDiv;

function errorHandler(e) {
  //Lame - do nothing	
	alert(e.toString());
}

function init() {
	console.log("init fired");

	testDiv = document.querySelector("#testDiv");

	testDiv.innerHTML += "init fired<br>";

	gaPlugin = window.plugins.gaPlugin;
	gaPlugin.init(gaInit, errorHandler, myAnalyticsAccount, 10);	
	testDiv.innerHTML += "Main init<br/>";
	
	//Records a fake event
	document.querySelector("#testButton").addEventListener("touchend", function(e) {

		e.preventDefault();
		
		//Track an open event
		gaPlugin.trackEvent(function() {
			testDiv.innerHTML += "Button event ok<br/>";
			
		}, errorHandler, "Button", "Click", "Main Button", new Date());	

	});

	//Records a fake page load
	document.querySelector("#testFakePage").addEventListener("touchend", function(e) {

		e.preventDefault();
		
		//Track an open event
		gaPlugin.trackPage(function() {
			testDiv.innerHTML += "Fake Page Event ok<br/>";
			
		}, errorHandler, "/fake1.html");
		
		
	});
	
}

function gaInit() {
	testDiv.innerHTML += "GA init<br/>";
	
	//Track an open event
	gaPlugin.trackEvent(function() {
		testDiv.innerHTML += "Track event ok<br/>";
		
	}, errorHandler, "App", "Open", "App", new Date());	
}