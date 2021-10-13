/* title  */
const main_title = document.querySelector(".title");
const titleWrap = document.querySelector("#title-wrap");

/* weather */
const appid = "16c66e105d04ebd30030f7e5dcc3c560";
const weatherWrap = document.querySelector(".weather-wrap");
const city = weatherWrap.querySelector(".city");
const iconDiv = weatherWrap.querySelector(".icon");
const weatherDiv = weatherWrap.querySelector(".weather");
const minmaxDiv = weatherWrap.querySelector(".min-max");
const minP = minmaxDiv.querySelector(".min");
const maxP = minmaxDiv.querySelector(".max");

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
    navigator.geolocation.getCurrentPosition(successEvent, errorEvent); //날씨 정보에 대한 지역위치 불러오기
}

function successEvent(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
 
    const url = `https://api.openweathermap.org/data/2.5/weather?&lang=kr&lat=${lat}&lon=${lon}&appid=${appid}&units=metric`
 
    fetch(url)
    .then(response => response.json()
    .then(data =>{
         const location = data.name;
         const weather = data.weather[0].description;
         const Temperatuer = (data.main.temp).toFixed(2);
         const minT = (data.main.temp_min).toFixed(2);
         const maxT = (data.main.temp_max).toFixed(2);
         const iconpng = data.weather[0].icon.png
 
         city.innerText = location;
 
         const icon = data.weather[0].icon;
 
         const weatherimageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
 
         // background 보여주기 (색깔)
 
         weatherWrap.style.background="#afd9dfad";
         
         /* <img src=""></img>  */
         const imgTag = document.createElement("img");
         imgTag.setAttribute("src",weatherimageUrl);
 
         iconDiv.appendChild(imgTag);
 
         imgTag.className = "weathericon";
 
 
         weatherDiv.innerText = `${weather} ${Temperatuer}℃`;
 
         minP.innerText = `${minT} /`;
         maxP.innerText = maxT;
 
         
    })); 
 };
 
 function errorEvent(){
     alert("사용자의 현재 위치를 가져올 수 없습니다.")
 };

function submitEvent(event){
    event.preventDefault();
    const nameValue = nameInput.value;
    printEvent(nameValue);
    saveLocalStorage(nameValue);
}


const saveLocal_name = localStorage.getItem(NAME_KEY);

if(saveLocal_name){
    main_form.removeAttribute("class");
    printEvent(saveLocal_name);

}else{ // 로그인 화면을 보여줘야됨.
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",submitEvent);
}