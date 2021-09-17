/* title  */
const main_title = document.querySelector(".title");
const titleWrap = document.querySelector("#title-wrap");


/* login */
const login_Q = document.querySelector(".login");
login_Q.innerText = "What's your name?"
const loginForm = document.querySelector("#login-form");
const goBtn = loginForm.querySelector(".go_btn");
const nameInput = loginForm.querySelector(".name");
const NAME_KEY = "name";

/* content */
const main_form = document.querySelector("#main");



function saveLocalStorage(nameValue){
    localStorage.setItem(NAME_KEY,nameValue);
}

function printEvent(nameValue){
    loginForm.classList.add("hidden");
    titleWrap.removeAttribute("class");
    main_title.innerText=`${nameValue}'s ToDoList`;

    main_form.removeAttribute("class");
}

function submitEvent(event){
    event.preventDefault();
    const nameValue = nameInput.value;
    printEvent(nameValue);
    saveLocalStorage(nameValue);
   
}

const saveLocal_name = localStorage.getItem(NAME_KEY);

if(saveLocal_name){
    printEvent(saveLocal_name);
}else{
    loginForm.addEventListener("submit",submitEvent);
}