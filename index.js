let todolist = [];

displayelement();

function addto() {
  let inputelement = document.querySelector("#input_text");
  let inputtext = inputelement.value;
  let dateelement = document.querySelector("#date_picker");
  let inputdate = dateelement.value;
  todolist.push({ item: inputtext, dueDate: inputdate });
  inputelement.value = "";
  dateelement.value = "";
  displayelement();
}

function displayelement() {
  let displayelement = document.querySelector("#display");
  let newhtml = "";
  for (let i = 0; i < todolist.length; i++) {
    let { item, dueDate } = todolist[i];
    newhtml += `
    <div>
    <span>${item}</span>
    <span>${dueDate}</span>
    <button id="btn-delete" onclick="todolist.splice(${i}, 1);
    displayelement();">Delete</button>
    </div>
    `;
  }
  displayelement.innerHTML = newhtml;
}
