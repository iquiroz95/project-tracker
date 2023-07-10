var currentTime = $("#clock");
// var projName = $("#");
// var projType = $("#");
// var projDate = $("#");
// var formInfo = $("#");
// var formSubmit = $("#");

// Updating clock to current time every second
setInterval(function (){
    currentTime.text(dayjs().format("MMM D, YYYY [at] HH:mm:ss a"));
},1000)

//Listen for click to display modal

//Function to submit info and save to localStorage

//