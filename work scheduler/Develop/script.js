//Set live time with moment.js
var currentDay = document.querySelector("#currentDay");

var currentTimeEl = document.createElement("p");
currentDay.appendChild(currentTimeEl);

var currentMonthEl = document.createElement("P");
currentDay.appendChild(currentMonthEl);


var currentDateEl = document.createElement("p");
currentDay.prepend(currentDateEl);

setInterval(function() {
    currentDay.textContent = moment().format("dddd, MMMM Do YYYY h:mm:ss a");
    
}, 1000);

// Local storage
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour17 .description').val(localStorage.getItem('hour16'));
$('#hour18 .description').val(localStorage.getItem('hour17'));
