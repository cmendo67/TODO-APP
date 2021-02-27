let counter = 0;
let counter2 = 0;
let id = 0;
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  newTextBox();
  let textValue = document.getElementById('toDo');
  textValue.addEventListener("keyup", function(event) {
       if (event.keyCode === 13) {
        counter++;
        counter2++;
        id++;
        itemCountSpan.innerHTML = counter;
        uncheckedCountSpan.innerHTML = counter2;
        const list2 = document.createElement('li');
        list2.innerHTML = "<input id=\"checkBox" + id + "\" +  class=\"check" + "\" type=\"checkbox\" onclick=\"check_uncheck(this)\"</input>" + textValue.value +
        "<button id=\""+ id + "\" + onclick=\"deleteTodo(this)\">Delete </button>";
        list.appendChild(list2);
        removeAddText();       
         alert('You added a new Todo!');
     }
  });
}

const deleteTodo = (element) =>{
    counter--;
    counter2--;
    itemCountSpan.innerHTML = counter;
    uncheckedCountSpan.innerHTML = counter2;
    let listElement = element.parentNode;
    list.removeChild(listElement);
}
  
const check_uncheck = (checkBox) =>{
  
  if(checkBox.checked){
    counter2--;
    uncheckedCountSpan.innerHTML = counter2;
  }
  else{
    counter2++;
    uncheckedCountSpan.innerHTML = counter2;
  }
}

const removeAddText = () =>{
  const body = document.getElementById('textArea');
  body.removeChild(body.firstChild);
}
const newTextBox = () =>{
  const body = document.getElementById('textArea');
  body.innerHTML = "<input type=\"text\" id=\"toDo\" placeholder = \" Enter new Todo\">";
}