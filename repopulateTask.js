import {
  handleCircleClick,
  handleTrashClick,
  handleTaskClick,
} from "./EventListeners.js";
import { getTasksLocalStorage } from "./savingData.js";

export function repopulateTaskFromStorage() {
  const tasks = getTasksLocalStorage();
  const tasksContainer = document.querySelector(".tasks");

  tasksContainer.innerHTML = "";

  // Iterate over tasks and create elements
  tasks.forEach((taskData) => {
    const taskElement = document.createElement("div");
    const circleElement = document.createElement("i");
    const priorityElement = document.createElement("p");
    // const checkElement = document.createElement("i");
    const taskHeading = document.createElement("p");
    const dateElement = document.createElement("div");
    const trashElement = document.createElement("i");

    // adding classes
    taskElement.classList.add("task");
    priorityElement.classList.add("priority");
    taskData.overlined
      ? (circleElement.classList.add("fa-solid", "fa-check", "circle"),
        (taskHeading.style.textDecoration = "line-through"))
      : circleElement.classList.add("fa-regular", "fa-circle", "circle");

    taskHeading.classList.add("taskHeading");
    dateElement.classList.add("date");
    trashElement.classList.add("fa-solid", "fa-trash", "trash");

    // setting content
    taskHeading.textContent = taskData.taskName;
    dateElement.textContent = taskData.date;
    priorityElement.textContent = taskData.priority;

    // adding elements

    taskElement.append(priorityElement);
    taskElement.append(circleElement);
    taskElement.append(taskHeading);
    taskElement.append(dateElement);
    taskElement.append(trashElement);

    // add task to container
    tasksContainer.append(taskElement);

    circleElement.addEventListener("click", handleCircleClick);
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
  });
}
