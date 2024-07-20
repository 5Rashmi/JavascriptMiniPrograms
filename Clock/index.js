const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    if (!seconds === 0){
        secondHand.style.transition = 'all 0.09s linear';
    } else {
        secondHand.style.transition = 'none';
    }

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = (30 * hours + (minutes / 2)) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);