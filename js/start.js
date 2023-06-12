//initialize timer
var timerGlobal = new easytimer.Timer();
var timeParagraph = $("#time-p");

//level progression tabs start the timer
$('.tab').click(function () {
    // Get the value of the data-tab attribute of the clicked tab
  var tabId = $(this).data('tab');
    // specific location tabs
    if (tabId === 'tab3') {
      timerGlobal.start();
      timerGlobal.addEventListener('secondsUpdated', function (e) {
        timeParagraph.html("TIME: " + timerGlobal.getTimeValues().toString());
      })
    }
    if(tabId === 'tab4' || tabId === 'tab5' || tabId === 'tab6' || tabId === 'tab7' || tabId === 'tab8' || tabId === 'tab9' || tabId === 'tab10' || tabId === 'tab11' || tabId === 'tab12')
    {
        
    }
});

//clicking the slug pauses the timer
$("#slug10").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug9").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug8").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug7").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug6").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug5").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug4").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug3").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug2").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});
$("#slug1").click(function () {
    //pause the timer
    timerGlobal.pause();
    timeParagraph.html("FINAL TIME: " + timerGlobal.getTimeValues().toString());
});