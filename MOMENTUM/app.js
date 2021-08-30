const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
    console.dir(loginInput); // loginInput의 내부를 보기 위해서.
    console.log(loginInput.value);

    const username = loginInput.value;
    if(username === ""){
        alert("Please write your name");
    }else if(username.length > 15){
        alert("Your name is too long.");
    }

}


loginButton.addEventListener("click",onLoginBtnClick);
