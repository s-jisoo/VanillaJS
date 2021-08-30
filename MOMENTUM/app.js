const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
    console.dir(loginInput); // loginInput의 내부를 보기 위해서.
    console.log(loginInput.value);

}


loginButton.addEventListener("click",onLoginBtnClick);
