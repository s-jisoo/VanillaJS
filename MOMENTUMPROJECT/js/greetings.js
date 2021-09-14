const main_title = document.querySelector(".title");
main_title.innerText = "ToDoList";

const login_Q = document.querySelector(".login");
login_Q.innerText = "What's your name?"

const loginForm = document.querySelector("#login-form");
const goBtn = loginForm.querySelector(".go_btn");
const nameInput = loginForm.querySelector(".name");

loginForm.addEventListener("submit",submitEvent);

function submitEvent(event){
    event.preventDefault();
    const nameValue = nameInput.value;
    

}