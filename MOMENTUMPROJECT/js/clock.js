const clock = document.querySelector(".clock");



function EventClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
};


EventClock();
setInterval(EventClock,1000);