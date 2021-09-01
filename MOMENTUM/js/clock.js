const clock = document.querySelector("h2 #clock");

/**
 * 
 */
// 매 2초마다 이 함수를 실행.
function sayHello(){
    console.log("hello");
}


setInterval(sayHello, 5000);