document.addEventListener("deviceready", init, false);
var myAnalyticsAccount = "UA-66840604-1";

var testDiv;

function errorHandler(e) {
  //Lame - do nothing	
	alert(e.toString());
}

function init() {
	StatusBar.overlaysWebView(true);
window.analytics.startTrackerWithId(myAnalyticsAccount)	
}

