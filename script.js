let timerdisplay = document.querySelector('.timerdisplay');
let stopbtn = document.getElementById('stopbtn');
let startbtn = document.getElementById('startbtn');
let resetbtn = document.getElementById('resetbtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerid = null;

startbtn.addEventListener('click', function () {
    if (timerid !== null) {
        clearInterval(timerid)
    }
    timerid = setInterval(starttimer, 10)
});

stopbtn.addEventListener('click', function () {
    clearInterval(timerid);
});

resetbtn.addEventListener('click', function () {
    clearInterval(timerid);
    timerdisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});

function starttimer() {
    msec++;
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    // Format milliseconds
    let msecstring;
    if (msec < 10) {
        msecstring = `0${msec}`;
    } else {
        msecstring = msec;
    }

    // Format seconds
    let secsstring;
    if (secs < 10) {
        secsstring = `0${secs}`;
    } else {
        secsstring = secs;
    }

    // Format minutes
    let minsstring;
    if (mins < 10) {
        minsstring = `0${mins}`;
    } else {
        minsstring = mins;
    }
    timerdisplay.innerHTML = `${minsstring} : ${secsstring} : ${msecstring}`;
}