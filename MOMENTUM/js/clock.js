const clock = document.querySelector("h1#clock");

/**
 * 시계 만들기
 */
// 매 2초마다 이 함수를 실행.
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock(); // 웹사이트가 load되자마자 바로 실행.
setInterval(getClock, 1000); // 매초마다 다시 실행.

