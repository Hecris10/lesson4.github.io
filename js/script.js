function toggleMenu() {
    console.log(document.getElementById("menu").classList);
    document.getElementById("menu").classList.toggle("hide");
}

function getToday(){
    var data = new Date();
    
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var dayWeek = weekday[data.getDay()];
    var day = data.getDay();
    
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var monthName = month[data.getMonth()];
    
    var year = data.getFullYear();
    
    let fullDate = dayWeek + ", " + day + " " + monthName + " " + year; 
    
    document.getElementById("time").innerHTML = fulldate;
}
