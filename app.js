const secondsHands = document.getElementById("seconds-hand");
const minutesHands = document.getElementById("minutes-hand");
const hoursHands = document.getElementById("hours-hand");

function getTime() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const timeInterval = 6;


    secondsHands.style.transform = "rotate("+ (seconds * timeInterval) +"deg)"
    minutesHands.style.transform = "rotate("+ (minutes * timeInterval + seconds / 10) +"deg)"
    hoursHands.style.transform = "rotate("+ (hours * 30 + minutes / 2) +"deg)"

    
}
setInterval(getTime, 100)

getTime()

