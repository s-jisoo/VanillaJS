const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

/**
 * ToDoList 만들기
 * 1. toDo 들을 저장하기
 * 2. toDo 들을 불러오기
 * 즉, 내가 todo를 작성한뒤 먼저 이것들을 localStorage에 저장한 후,
 * 새로고침하면 localStorage에서 그것들을 불러와서, 화면에 그려준다.
 * 3. 원하는 toDo 삭제하기
 * 아이템 버튼을 클릭하고, 그 item을 지운 후(localStorage, html) 
 * 해당 item을 제외한 새로운 array를 다시 만든다. 
 */

 function liMouseOver(button){
    button.style.display="block";
 }

 function liMouseOut(button){
    button.style.display="none";
 }

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

    let liid = parseInt(li.id);
    toDos = toDos.filter((element) => element.id !== liid );  //삭제한 id를 제외하고 다시 toDos변수에 담음.
    saveToDos();

}
/*todo 그리기 이벤트*/
/* 
    <ul id="todo-list">
        <li id="">
                <span> newTodo </span>
                <button onclick="deleteToDo"> ❌ </button> 
        </li>
    </ul>
*/
function paintToDo(newToDoObj){ // 무엇을 그려야 할지 모르기때문에 인자 주기!!
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    li.style.marginBottom="15px";
    const span = document.createElement("span");
    span.innerText=newToDoObj.text;
    span.style.marginLeft="5px";
    const button = document.createElement("button");
    button.className="button";
    button.innerText = "❌";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span); // appendChild는 마지막에 놓여져야 함.
    li.addEventListener("mouseover",function(){liMouseOver(button)});
    li.addEventListener("mouseout",function(){liMouseOut(button)});
    li.appendChild(button);
    toDoList.appendChild(li);
}

/*todo 작성 필드후 submit이벤트*/
function handleToDoSubmit(event){
    event.preventDefault(); // submit(버튼클릭&엔터키)의 기본동작인 새로고침을 못하게 막음.
    const newTodo = toDoInput.value;
    toDoInput.value="";
     const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


/*localStorage에 저장된 값이 있으면,
새로고침 하고 나서도 todolist가 사라지지 않도록 하기 위해서 */
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos){ // saveTDos가 존재한다면, 
    // localStorage에서 가져온 string을 배열로 바꿔서 parsedToDos에 저장.
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;

    parsedToDos.forEach(paintToDo);
}

