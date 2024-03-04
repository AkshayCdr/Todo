import {
  handleCircleClick,
  handleTrashClick,
  handleTaskClick,
} from "./EventListeners.js";
import { saveToLocalStorage } from "./savingData.js";

const taskNameInput = document.querySelector(".taskName");
const dateSelector = document.querySelector(".dateSelector");
const prioritySelector = document.querySelector(".prioritySelect");

export function handleAddButtonClick() {
  const taskName = taskNameInput.value;
  const date = dateSelector.value;
  const priority = prioritySelector.value;

  if (!taskName) return null;

  //parent element tasks
  const tasks = document.querySelector(".tasks");

  //create tasks dom
  const taskElement = document.createElement("div");
  const priorityElement = document.createElement("p");
  const taskCompleteElement = document.createElement("i");
  const taskHeading = document.createElement("p");
  const dateElement = document.createElement("div");
  const trashElement = document.createElement("i");

  //adding class to element
  taskElement.classList.add("task");
  priorityElement.classList.add("priority");
  taskCompleteElement.classList.add("fa-regular", "fa-circle", "circle");
  taskHeading.classList.add("taskHeading");
  dateElement.classList.add("date");
  trashElement.classList.add("fa-solid", "fa-trash", "trash");

  //adding value to element
  taskHeading.textContent = taskName;
  dateElement.textContent = date;
  priorityElement.textContent = priority;

  //adding element to task
  taskElement.append(priorityElement);
  taskElement.append(taskCompleteElement);
  taskElement.append(taskHeading);
  taskElement.append(dateElement);
  taskElement.append(trashElement);

  //adding to tasks
  tasks.append(taskElement);

  //adding to local storage
  saveToLocalStorage();

  taskCompleteElement.addEventListener("click", handleCircleClick);
  trashElement.addEventListener("click", handleTrashClick);

  document.querySelectorAll(".task").forEach((task) => {
    task.addEventListener("click", handleTaskClick);
  });

  const elementClasses = [
    ".circle",
    ".date",
    ".taskHeading",
    ".trash",
    ".priority",
  ];

  document.querySelectorAll(".task").forEach((task) => {
    elementClasses.forEach((ele) => {
      // console.log(ele);
      task.querySelector(ele).addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });
  });
}
