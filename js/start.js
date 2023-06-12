//initialize timer
var timerGlobal = new easytimer.Timer();
var timeParagraph1 = $("#location1 #time-p");
var timeParagraph2 = $("#location2 #time-p");
var timeParagraph3 = $("#location3 #time-p");
var timeParagraph4 = $("#location4 #time-p");
var timeParagraph5 = $("#location5 #time-p");
var timeParagraph6 = $("#location6 #time-p");
var timeParagraph7 = $("#location7 #time-p");
var timeParagraph8 = $("#location8 #time-p");
var timeParagraph9 = $("#location9 #time-p");
var timeParagraph10 = $("#location10 #time-p");

//level progression tabs start the timer
$('.tab').click(function () {
    // Get the value of the data-tab attribute of the clicked tab
    var tabId = $(this).data('tab');
    // specific location tabs
    if (tabId === 'tab3') {
        timerGlobal.start();
        timerGlobal.addEventListener('secondsUpdated', function (e) {
            timeParagraph1.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph2.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph3.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph4.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph5.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph6.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph7.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph8.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph9.html("TIME: " + timerGlobal.getTimeValues().toString());
            timeParagraph10.html("TIME: " + timerGlobal.getTimeValues().toString());
        })
    }
});

