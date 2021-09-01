const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  
const USERNAME_KEY = "username"

/**
 * 
 * 로그인
 *  localStorage 정보 유무 확인.
 * (정보가 있으면, form 보여주면 안됨. 없으면, form 보여주기!!!)
 * 
 */
 function onLoginSubmit(event){
    event.preventDefault(); // .브라우저의 기본 동작을 막아줌.(즉, 새로고침 안됨)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
 // localStorage.setItem("저장될 아이템의 이름", 값은 변수명);                   
    localStorage.setItem(USERNAME_KEY,username)
 // greeting.innerText = "Hello " + username;
    paintingGreetings(username);
 }

 function paintingGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
 }

 const saveUsername = localStorage.getItem(USERNAME_KEY);
 
 if(saveUsername === null){       
   // show the form
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit",onLoginSubmit);
 }else{
   // show the greeting
   paintingGreetings(saveUsername);
 }



