const listH = document.querySelector(".listHeader");
const listA = document.querySelector(".listAdd"); 
const listW = listA.querySelector(".listWrite"); // 해야할일입력하는input란
const listAddB = listA.querySelector(".add"); // 해야할일 추가하는 +버튼
const listM = document.querySelector(".list-main");
const todeL = document.querySelector(".todo-list"); // 해야할일 목록 ul
const listDelete = listA.querySelector(".delete"); // 해야할일 목록 삭제 버튼

const localStorageTitle ="todoT"
let listArr=[]; // 리스트입력후, 배열에 저장할 변수.
let liC="";
/* listHeader 에다가 현재 날짜 0000년 00월 00일 000요일 */
const date = new Date();
const year = date.getFullYear();
const month = String(date.getMonth()).padStart(2,"0");
const Gdate = String(date.getDate()).padStart(2,"0");
// 한국어로 요일 만들기. Date 객체로 day만 가져다쓰면 숫자로 표기됨. (일-토가 0-6으로 표기됨.)
const dayN = {weekday:'long'};
const day = new Intl.DateTimeFormat('ko-KR',dayN).format(date);
listH.innerText = `${year}년 ${month}월 ${Gdate}일 ${day}`;


//이벤트.
/* 해야할일 입력후, + 버튼 눌렀을때 localStorage에 저장 후, 배열에 저장. */
function addButtonClick(){
    const listinput = listW.value;
    listW.value="";
    const newToDoObj = {
        Text:listinput,
        id:Date.now()
    };
    listArr.push(newToDoObj); //  배열변수에 저장.
    printlist(newToDoObj);
    savelistLocalStorage();
}

/* localStorage에 저장이벤트 */ 
function savelistLocalStorage(){
    localStorage.setItem(localStorageTitle,JSON.stringify(listArr));
}

/* list목록 그려주는 이벤트 */
function printlist(newToDoObj){
    const li = document.createElement("li");
    li.className = "liid";
    liC = li.className
    const input = document.createElement("input");
    input.type="checkbox";
    input.id =  newToDoObj.id;
    const label = document.createElement("label");
    label.htmlFor = newToDoObj.id;
    const span = document.createElement("span");
    span.className ="list";
    span.innerText = newToDoObj.Text;
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(span);
    todeL.appendChild(li);


    
}


/* 리스트 목록 전체삭제 */
function deleteButtonClick(todeL){
    localStorage.removeItem(localStorageTitle);
    listArr=[];
    
    while (todeL.hasChildNodes()) {
        todeL.removeChild(todeL.firstChild);
    }
}


/* 새로고침시, 사라지지 않게 하기. */
const saveList = localStorage.getItem(localStorageTitle);

//if(localStorage.name){  // localStorage에 name이 존재하면(즉, 로그인상태이면)
    if(saveList){
         /* localStorage에서 localStorageTitle 아이템을(-->string형태) 배열형태로 바꾼후, 
            다시 배열에 넣어주기 */
         const parsedToDos =  JSON.parse(saveList);
         listArr = parsedToDos;
         parsedToDos.forEach(printlist);
    console.log("dddd");
    }
   
//}

/* 이벤트처리함수 만들기 */
listAddB.addEventListener("click",addButtonClick);
listDelete.addEventListener("click",function(){
    deleteButtonClick(todeL);
});
