// Function to create and run both the clockWork and date //

function startClock() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clockWork").innerHTML = hr + " : " + min + " : " + sec;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var currentWeekDay = days[today.getDay()];
    var currentDay = today.getDate();
    var currentMonth = months[today.getMonth()];
    var currentYear = today.getFullYear();
    var date = currentWeekDay+ ", " +currentMonth+ " " + currentDay+ " " +currentYear;
    document.getElementById("date").innerHTML = date;

    var time = setTimeout(function(){ startClock() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;

}


// Function to mention time of the day //
function timeOfDay() {

var day = new Date();
var hr = day.getHours();
if (hr == 1) {
 alert("Hello! Currently it is night time! ");
}
if (hr == 2) {
 alert("Hey, it is 2AM! Still night time, try to get some sleep!");
}
if (hr == 3) {
 alert("Hey, it's 3AM! Are you a vampire or something? It's night time");
}
if (hr == 4) {
 alert("4AM? And you have been awake all night?!");
}
if (hr == 5) {
 alert("Hello! In just 2 hours it's morning, GO TO SLEEP!");
}
if (hr == 6) {
 alert("One more hour until it's morning... Fine, take a nap later in the day.");
}
if ((hr == 6) || (hr == 7) || (hr == 8) || (hr == 9) || (hr == 10)) {
 alert("Good Morning!");
}
if (hr == 11) {
 alert("11AM... Time for another cup of coffee I guess!");
}
if (hr == 12) {
 alert("MIDDAY! Time for food!");
}
if (hr == 14) {
 alert("It's 2PM. Time for the 12th cup of coffee for the day!");
}
if ((hr == 15) || (hr == 16) || (hr == 13)) {
 alert("Good Afternoon!");
}
if ((hr == 17) || (hr == 18) || (hr == 19) || (hr == 20) || (hr == 21) || (hr == 22)) {
 alert("Good Evening! Welcome to I am tired, but cant sleep because I've had 12 coffees!");
}
if (hr == 23) {
 alert("HEY! It's almost midnight... How's the caffeine going for you?");
}
if (hr==0) {
 alert("It's midnight... GO TO SLEEP!");
}
}