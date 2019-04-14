(function() {
    // Set the date we're counting down to
    var countDownDate = new Date("Jun 1, 2019 14:00").getTime();
    // Official Time: Jun 1, 2019 14:00

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if(days !== 0)
            document.getElementById("dayLabel").innerHTML = days + " Days";
        else {
            document.getElementById("dayLabel").innerHTML = "It's Today!";
            document.getElementById("dayLabel").style.color = "#3a96f7";
        }

        if(hours !== 0 || days !== 0)
            document.getElementById("hourLabel").innerHTML = hours + " Hours";
        else {
            document.getElementById("hourLabel").innerHTML = "Just Couple More Minutes!";
            document.getElementById("hourLabel").style.color = "#f74272";
        }

        if(minutes !== 0 || hours !== 0 || days !== 0)
            document.getElementById("minLabel").innerHTML = minutes + " Minutes";
        else {
            document.getElementById("minLabel").innerHTML = "T - " + seconds;
            document.getElementById("minLabel").style.fontSize = "85px";
        }

        if(minutes !== 0 || hours !== 0 || days !== 0)
            document.getElementById("secLabel").innerHTML = seconds + " Seconds";
        else
            document.getElementById("secLabel").innerHTML = "";

        // If the count down is over, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("title").innerHTML = "You have finally graduated from Lake Ridge Academy!";
            document.getElementById("dayLabel").innerHTML = "";
            document.getElementById("hourLabel").innerHTML = "June 1, 2019";
            document.getElementById("hourLabel").style.color = "#000";
            document.getElementById("minLabel").innerHTML = "";
            document.getElementById("secLabel").innerHTML = "";
        }
    }, 200);
} ());