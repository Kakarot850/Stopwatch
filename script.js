

// const hourEle = document.querySelector(".hour");
// const minuteEle = document.querySelector(".minute");
// const secondEle = document.querySelector(".second");

const timer = document.querySelector(".timer");

const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let second = 0;
let minute = 0;
let hour = 0;
let timeInteval;
let isActive = false;
const startTimer = () => {
    if (isActive) return;
    isActive = true;
    console.log(isActive);
    
    timeInteval = setInterval(() => {
        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);
        second++;
        if (second == 60) {
            minute++;
            second %= 60
        }
        if (minute == 60) {
            hour++;
            minute %= 60
        }
        if (second < 10) {
            second = `0${second}`
        }
        if (minute < 10) {
            minute = `0${minute}`
        }
        if (hour < 10) {
            hour = `0${hour}`
        }
        // timer.innerHTML = `<h2>${hour}:${minute}:${second}</h2>`
        timer.textContent = `${hour}:${minute}:${second}`
        console.log(hour, minute, second);
    
    
    }, 1000);
}

const stopTimer = ()=>{
    clearInterval(timeInteval);
    isActive = false;
}

const clearTimer = () => {
    clearInterval(timeInteval);
    timer.textContent = "00:00:00";
    isActive = false;
    second = 0;
    minute = 0;
    hour = 0;
}


startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", clearTimer);
stopBtn.addEventListener("click", stopTimer);


