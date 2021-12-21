function secondHand(){
    const now = new Date();
    const sec = now.getSeconds();
    
    const secHand = document.getElementsByClassName(`second-hand`)
    secHand[0].style.transform = `rotate(${90 + (6*sec)}deg)`;
}
function minuteHand(){
    const now = new Date();
    const min = now.getMinutes();
    
    const minHand = document.getElementsByClassName(`minute-hand`)
    minHand[0].style.transform = `rotate(${90 + (6*min)}deg)`;
}
function hourHand(){
    const now = new Date();
    const hour = now.getHours();
    
    const hourHand = document.getElementsByClassName(`hour-hand`)
    hourHand[0].style.transform = `rotate(${90 + (30*hour)}deg)`;
}

function start(){
    setInterval(secondHand, 1000);
    setInterval(minuteHand, 1000);
    setInterval(hourHand, 1000);
}

start();

function timeDisplay(){
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();

    const secDis = document.getElementsByClassName("sec")
    secDis[0].innerHTML = sec + "초";

    const minDis = document.getElementsByClassName("min")
    minDis[0].innerHTML = min + "분";

    const hourDis = document.getElementsByClassName("hour")
    hourDis[0].innerHTML = hour + "시";


}

setInterval(timeDisplay, 1000)