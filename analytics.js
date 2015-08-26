document.addEventListener("deviceready", init, false);
var myAnalyticsAccount = "UA-66840604-1";


function init() {
	//StatusBar.overlaysWebView(true);
    alert("ready");
    window.analytics.startTrackerWithId("UA-66840604-1")	
}

