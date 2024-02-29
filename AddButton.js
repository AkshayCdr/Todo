import {
  handleCircleClick,
  handleTrashClick,
  handleTaskClick,
} from "./EventListeners.js";
import { saveToLocalStorage } from "./savingData.js";

const taskNameInput = document.querySelector(".taskName");
const dateSelector = document.querySelector(".dateSelector");

export function handleAddButtonClick() {
  const taskName = taskNameInput.value;
  //   const description = descriptionInput.value;
  //   const priority = prioritySelect.value;
  const date = dateSelector.value;

  if (!taskName) return null;

  //parent element tasks
  const tasks = document.querySelector(".tasks");

  //create tasks dom
  const taskElement = document.createElement("div");
  const circleElement = document.createElement("i");
  const taskHeading = document.createElement("p");
  const dateElement = document.createElement("div");
  const trashElement = document.createElement("i");

  //adding class to element
  taskElement.classList.add("task");
  circleElement.classList.add("fa-regular", "fa-circle", "circle");
  taskHeading.classList.add("taskHeading");
  dateElement.classList.add("date");
  trashElement.classList.add("fa-solid", "fa-trash", "trash");

  //adding value to element
  taskHeading.textContent = taskName;
  dateElement.textContent = date;

  //adding element to task
  taskElement.append(circleElement);
  taskElement.append(taskHeading);
  taskElement.append(dateElement);
  taskElement.append(trashElement);

  //adding to tasks
  tasks.append(taskElement);

  //adding to local storage
  saveToLocalStorage();

  circleElement.addEventListener("click", handleCircleClick);
  trashElement.addEventListener("click", handleTrashClick);

  document.querySelectorAll(".task").forEach((task) => {
    task.addEventListener("click", handleTaskClick);
  });

  //to stop event propagation
  document.querySelectorAll(".task").forEach((task) => {
    task.querySelector(".circle").addEventListener("click", (e) => {
      e.stopPropagation();
    });

    task.querySelector(".date").addEventListener("click", (e) => {
      e.stopPropagation();
    });

    task.querySelector(".taskHeading").addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });
}
