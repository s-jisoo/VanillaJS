const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

/**
 * ToDoList 만들기
 * 1. toDo 들을 저장하기
 * 2. toDo 들을 불러오기
 * 즉, 내가 todo를 작성한뒤 먼저 이것들을 localStorage에 저장한 후,
 * 새로고침하면 localStorage에서 그것들을 불러와서, 화면에 그려준다.
 */

/*localStorage에 작성한 todo 저장 이벤트 */
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

/*선택된 todolist 삭제 이벤트 */
function deleteToDo(event){
    // event.target --> 클릭된 버튼 객체(HTML element)
    // event.target.parentElement --> 클릭된 버튼 객체의 부모객체 = li
    const li = event.target.parentElement;
    li.remove();
}
/*todo 그리기 이벤트*/
function paintToDo(newTodo){ // 무엇을 그려야 할지 모르기때문에 인자 주기!!
    console.log("i will paint",newTodo);

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText=newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo)
    li.appendChild(span); // appendChild는 마지막에 놓여져야 함.
    li.appendChild(button);
    toDoList.appendChild(li);
}

/*todo 작성 필드후 submit이벤트*/
function handleToDoSubmit(event){
    event.preventDefault(); // submit(버튼클릭&엔터키)의 기본동작인 새로고침을 못하게 막음.
    const newTodo = toDoInput.value;
    toDoInput.value="";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function sayHello(item){
    console.log("hello ", item);
}

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(saveToDos){
    // localStorage에서 가져온 string
    const parsedToDos = JSON.parse(savedToDos);
    parsedToDos.forEach(sayHello);
}
