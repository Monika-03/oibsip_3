const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector(".wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.querySelector("#error");
const countValue = document.querySelector(".count-value");

let tasksCount = 0;

let dateInput,timeInput;
const displayCount = (tasksCount) => {
    countValue.innerText = tasksCount;
}

const addTask = () => {
    const taskName = newTaskInput.value.trim();
    error.style.display = "none";
    if(!taskName){
        setTimeout(() => {
            error.style.display = "block";
        }, 200);
        return;
    }
    
    const task = `<div class="task">
             <input type="checkbox" class="task-check">
             <div>
             <span class="taskname">${taskName} </span>
             <p><input id="date" type="date"></p>
             <p><input id="time" type="time"></p>
             </div>
             <button class="edit">
               <i class="fa-solid fa-pen-to-square"></i>
             </button>
             <button class="delete">
             <i class="fa-solid fa-trash"></i>
             </button>
            
             </div>`;

tasksContainer.insertAdjacentHTML("beforeend",task);  //to insert a text as Nodes into the DOM tree at a specified position

const deleteButton = document.querySelectorAll(".delete");
deleteButton.forEach((button) => {
    button.onclick = () => {
      button.parentNode.remove();
      tasksCount -= 1;
      displayCount(tasksCount);
    }
})

const editButton = document.querySelectorAll(".edit");
editButton.forEach((editBtn) => {
    editBtn.onclick = (e) => {
      let targetElement = e.target;
      if(!(e.target.className == "edit")){
        targetElement = e.target.parentElement;
      }
      newTaskInput.value = targetElement.previousElementSiblings?.innerText;
      targetElement.parentNode.remove();
      tasksCount -= 1;
      displayCount(tasksCount);
    }
})

const taskCheck = document.querySelectorAll(".task-check");
taskCheck.forEach((checkBox) => {
    checkBox.onchange = () => {
    checkBox.nextElementSibling.classList.toggle("completed");
    if(checkBox.checked){
        tasksCount -= 1 ;
    }
    else {
        tasksCount += 1;
    }
    displayCount(tasksCount);
}
})

tasksCount += 1;
displayCount(tasksCount);
newTaskInput.value = "";



}


addBtn.addEventListener("click",addTask);z

window.onload = () => {
    taskCount = 0;
    displayCount(tasksCount);
    newTaskInput.value="";
}

