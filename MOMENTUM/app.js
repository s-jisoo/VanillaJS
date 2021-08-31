const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  

function onLoginSubmit(event){
    event.preventDefault(); // .브라우저의 기본 동작을 막아줌.(즉, 새로고침 안됨)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    //greeting.innerText = "hello " + username;
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
   
    
}




loginForm.addEventListener("submit",onLoginSubmit);
