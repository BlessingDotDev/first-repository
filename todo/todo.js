const inputElement = document.querySelector('.js-input');
const inputDate = document.querySelector('.js-date');
const buttonElement = document.querySelector('.js-button');
const divElement = document.querySelector('.todo');

let todoList = [
{name: 'dd', date: '2023-10-19'}];

renderTodo();


function renderTodo() {
  
   let todoHtml = '';


  todoList.map((todo, index)=>{
    const {name, date} = todo;
    const html = `<p>${name}</p>
    <div>${date}</div>
    <button onclick="
    todoList.splice(${index},1)
    renderTodo();
    ">Delete</button>`
    todoHtml += html; 
    divElement.innerHTML = todoHtml;
  })
}

function addTodo() {
  
  name = inputElement.value;
  date = inputDate.value;
  todoObject = {
    name,
    date
  }
  todoList.push(todoObject);
  console.log(todoList)
  renderTodo();
}


buttonElement.addEventListener('click', addTodo)