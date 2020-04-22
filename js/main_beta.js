(function() {
    function getTime(year) {
        return new Date("Jun 1, " + year + " 14:00").getTime();
    }

    // Set the date we're counting down to
    let countDownDate = -1;

    function generateDropdown() {
        const select = document.getElementById("year_select");
        let targetYear = -1;
        if (new Date().getMonth() >= 7) {
            targetYear = new Date().getFullYear() + 1;
        }
        else {
            targetYear = new Date().getFullYear();
        }
        for (let i = 0; i < 4; i++) {
            const option = document.createElement("option");
            option.text = "Class of " + (targetYear + i);
            option.value = "" + (targetYear + i);
            select.add(option);
        }
    }

    function main() {
        const select = document.getElementById("year_select");
        if (select.options[select.selectedIndex].value.localeCompare("-1") === 0) {
            requestAnimationFrame(main);
        }
        else {
            select.disabled = true;
            select.hidden = true;
            const countdown = document.getElementById("countdown");
            console.log(select.options[select.selectedIndex].value);
            countDownDate = getTime(select.options[select.selectedIndex].value);
            countdown.hidden = false;
            requestAnimationFrame(updateTime);
        }
    }

    function generateEgg() {
        const num = ((Math.random() * 10000000) % 4) | 0;
        const list = ["Paradigm shifting without a clutch!",
                      "VFS: Busy inodes after unmount. Self-destruct in 5 seconds. Have a nice day...",
                      "At the source of every error which is blamed on the computer you will find at least two human " +
                      "errors, including the error of blaming it on the computer.",
                      "\"Always code as if the guy who ends up maintaining your code will be a violent psychopath " +
                      "who knows where you live.\" - Martin Golding",
                      "There is just no portable way to use double-quoted strings inside double-quoted back-quoted " +
                      "expressions"];
        const select = document.getElementById("egg");
        select.textContent = list[num];
    }

    function updateTime() {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const dayLabel = document.getElementById("dayLabel");
        const hourLabel = document.getElementById("hourLabel");
        const minLabel = document.getElementById("minLabel");
        const secLabel = document.getElementById("secLabel");


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
    generateDropdown();
    generateEgg();
    requestAnimationFrame(main);
}());
