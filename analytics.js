//document.addEventListener("deviceready", init, false);
var myAnalyticsAccount = "UA-66840604-1";




document.addEventListener("deviceready", function(){
    alert(window.plugins);
    alert(myAnalyticsAccount);
    window.analytics.setUserId('UA-66840604-1');
     window.analytics.startTrackerWithId('UA-66840604-1');
   window.analytics.trackView('Screen Title');
  
});