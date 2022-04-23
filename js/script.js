(function() {

'use strict'

        const $DAILY = document.querySelector(".daily");
        const $WEEKLY = document.querySelector(".weekly");
        const $MONTHLY = document.querySelector(".monthly");

        const $BTNMOON = document.querySelector(".bx-moon");
        const $BTNSUN = document.querySelector(".bx-sun");
        const $BODY = document.querySelector("body");
       

        //WORK
        const $WHOURS = document.getElementById("whours");
        const $WNEXT = document.getElementById("wnext");

        //PLAY
        const $PHOURS = document.getElementById("phours");
        const $PNEXT = document.getElementById("pnext");

        //STUDY
        const $SHOURS = document.getElementById("shours");
        const $SNEXT = document.getElementById("snext");

        //EXERCISE
        const $EHOURS = document.getElementById("ehours");
        const $ENEXT = document.getElementById("enext");

        //SOCIAL
        const $SLHOURS = document.getElementById("slhours");
        const $SLNEXT = document.getElementById("slnext");

        //SELF CARE
        const $SCHOURS = document.getElementById("schours");
        const $SCNEXT = document.getElementById("scnext");

        $DAILY.addEventListener("click", daily);
        $MONTHLY.addEventListener("click", monthly);
        $WEEKLY.addEventListener("click", weekly);
        $BTNMOON.addEventListener("click", changeMode);
        $BTNSUN.addEventListener("click", changeMode);

     
        function changeMode () {
            $BODY.classList.toggle("light");
        }


        function daily () {
            $WHOURS.innerHTML = "5hrs";
            $WNEXT.innerHTML = "Last Week - 7hrs";

            $PHOURS.innerHTML = "1hrs";
            $PNEXT.innerHTML = "Last Week - 2hrs";

            $SHOURS.innerHTML = "0hrs";
            $SNEXT.innerHTML = "Last Week - 1hrs";

            $EHOURS.innerHTML = "1hrs";
            $ENEXT.innerHTML = "Last Week - 1hrs";

            $SLHOURS.innerHTML = "1hrs";
            $SLNEXT.innerHTML = "Last Week - 3hrs";

            $SCHOURS.innerHTML = "0hrs";
            $SCNEXT.innerHTML = "Last Week - 1hrs";

            $WEEKLY.style.color = "hsl(235, 45%, 61%)";
            $DAILY.style.color = "#ffF";
            $MONTHLY.style.color = "hsl(235, 45%, 61%)"
        }

        function weekly () {
            $WHOURS.innerHTML = "32hrs";
            $WNEXT.innerHTML = "Last Week - 36hrs";

            $PHOURS.innerHTML = "10hrs";
            $PNEXT.innerHTML = "Last Week - 8hrs";

            $SHOURS.innerHTML = "4hrs";
            $SNEXT.innerHTML = "Last Week - 7hrs";

            $EHOURS.innerHTML = "4hrs";
            $ENEXT.innerHTML = "Last Week - 5hrs";

            $SLHOURS.innerHTML = "5hrs";
            $SLNEXT.innerHTML = "Last Week - 10hrs";

            $SCHOURS.innerHTML = "2hrs";
            $SCNEXT.innerHTML = "Last Week - 2hrs";

            $WEEKLY.style.color = "#ffF";
            $DAILY.style.color = "hsl(235, 45%, 61%)";
            $MONTHLY.style.color = "hsl(235, 45%, 61%)";
        }

        function monthly () {
            $WHOURS.innerHTML = "103hrs";
            $WNEXT.innerHTML = "Last Week - 128hrs";

            $PHOURS.innerHTML = "23hrs";
            $PNEXT.innerHTML = "Last Week - 29hrs";

            $SHOURS.innerHTML = "13hrs";
            $SNEXT.innerHTML = "Last Week - 19hrs";

            $EHOURS.innerHTML = "11hrs";
            $ENEXT.innerHTML = "Last Week - 18hrs";

            $SLHOURS.innerHTML = "21hrs";
            $SLNEXT.innerHTML = "Last Week - 23hrs";

            $SCHOURS.innerHTML = "7hrs";
            $SCNEXT.innerHTML = "Last Week - 11hrs";

            $WEEKLY.style.color = "hsl(235, 45%, 61%)";
            $DAILY.style.color = "hsl(235, 45%, 61%)"
            $MONTHLY.style.color = "#ffF";
        }
}) () 