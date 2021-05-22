var interval = setInterval(function() {

    var stopTimer = new Date("feb 06, 2022 00:00:01").getTime(); //setTime to stopTimer (like: birthDate, 06 feb 2022)
    var currentTime = new Date().getTime();
    var timer = stopTimer - currentTime;
    var days = Math.floor(timer / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timer % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timer % (1000 * 60)) / 1000);

    document.getElementById("day").innerHTML =days ;
    document.getElementById("hour").innerHTML =hours;
    document.getElementById("minute").innerHTML = minutes; 
    document.getElementById("second").innerHTML =seconds; 
    
    if (timer < 0){
        
        clearInterval(interval);
        document.getElementById("alert").innerHTML = "TIME OUT";
        document.getElementById("day").innerHTML ='0';
        document.getElementById("hour").innerHTML ='0';
        document.getElementById("minute").innerHTML ='0' ; 
        document.getElementById("second").innerHTML = '0'; 
    }
}, 1000);