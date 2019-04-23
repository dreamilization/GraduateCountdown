(function() {

    function getTime() {
        if(new Date().getMonth() >= 8)
        {
            return new Date("Jun 1, " + (new Date().getFullYear() + 1) + " 14:00").getTime();
        }
        return new Date("Jun 1, " + new Date().getFullYear() + " 14:00").getTime();
    }

    // Set the date we're counting down to
    var countDownDate = getTime();

    function updateTime() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        var dayLabel = document.getElementById("dayLabel");
        var hourLabel = document.getElementById("hourLabel");
        var minLabel = document.getElementById("minLabel");
        var secLabel = document.getElementById("secLabel");


        if(days !== 0) {
            dayLabel.innerHTML = days + " Days";
        }
        else {
            dayLabel.innerHTML = "It's Today!";
            dayLabel.style.fontSize = "6.5vh";
        }

        if(hours !== 0 || days !== 0) {
            hourLabel.innerHTML = hours + " Hours";
        }
        else {
            hourLabel.innerHTML = "Just Couple More Minutes!";
            hourLabel.style.fontSize = "6.2vh";
        }

        if(minutes !== 0 || hours !== 0 || days !== 0) {
            minLabel.innerHTML = minutes + " Minutes";
        }
        else {
            minLabel.innerHTML = "T - " + seconds;
            minLabel.style.fontSize = distance <= 10000 ? (165 - 8 * distance / 1000) + "px" : "85px";
        }

        if(minutes !== 0 || hours !== 0 || days !== 0) {
            secLabel.innerHTML = seconds + " Seconds";
        }
        else {
            secLabel.innerHTML = "";
        }

        // If the count down is over, write some text
        if (distance < 0) {
            document.getElementById("title").innerHTML = "You have finally graduated from Lake Ridge Academy!";
            dayLabel.innerHTML = "";
            hourLabel.innerHTML = "June 1, " + new Date().getFullYear();
            hourLabel.style.color = "aliceblue";
            minLabel.innerHTML = "";
            secLabel.innerHTML = "";
        }
        else
        {
            requestAnimationFrame(updateTime);
        }
    }

    requestAnimationFrame(updateTime);
}());
