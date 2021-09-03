const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(event){
    event.preventDefault(); // submit(버튼클릭&엔터키)의 기본동작인 새로고침을 못하게 막음.
    const newTodo = toDoInput.value;
    toDoInput.value="";
}

toDoForm.addEventListener("submit",handleToDoSubmit);

