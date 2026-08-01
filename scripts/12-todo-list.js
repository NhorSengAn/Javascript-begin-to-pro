const todoList = [
  {
    name: "make dinner",
    dueDate: "2026-07-30",
  },
  {
    name: "Make meal",
    dueDate: "2026-07-30",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>
        ${name}
      </div>
        <div>
        ${dueDate}
      </div>
        <button onclick="
         todoList.splice(${index}, 1);
         renderTodoList(); 
        " class = "delete-todo-button">
          Delete
      </button>
      
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

//Input data value
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateInputElement = document.querySelector(".js-date-input");

  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  if (name === "" || dueDate === "") {
    alert("Please enter todo name and a date.");
  } else {
    todoList.push({
      // name: name,
      // dueDate: dueDate,
      name,
      dueDate, //shortand cut if the property and vairble name are the same;
    });
    inputElement.value = "";

    renderTodoList();
  }
}
