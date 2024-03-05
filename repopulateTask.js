import {
  handleTaskCompletedClick,
  handleTrashClick,
  handleTaskClick,
} from "./EventListeners.js";
import { getTasksLocalStorage } from "./savingData.js";
import { colour } from "./AddButton.js";

export function repopulateTaskFromStorage() {
  const tasksDataLocalStorage = getTasksLocalStorage();
  const tasksContainerElement = document.querySelector(".tasks");

  tasksContainerElement.innerHTML = "";

  // Iterate over tasks and create elements
  tasksDataLocalStorage.forEach((taskData) => {
    const taskElement = document.createElement("div");
    const taskCompleteElement = document.createElement("i");
    const priorityElement = document.createElement("p");
    // const checkElement = document.createElement("i");
    const taskHeading = document.createElement("p");
    const dateElement = document.createElement("div");
    const trashElement = document.createElement("i");

    // adding classes
    taskElement.classList.add("task");
    taskElement.classList.add(colour[parseInt(taskData.priority)]);
    priorityElement.classList.add("priority");
    if (taskData.overlined) {
      taskCompleteElement.classList.add("fa-solid", "fa-check", "circle");
      taskHeading.style.textDecoration = "line-through";
    } else {
      taskCompleteElement.classList.add("fa-regular", "fa-circle", "circle");
    }
    taskHeading.classList.add("taskHeading");
    dateElement.classList.add("date");
    trashElement.classList.add("fa-solid", "fa-trash", "trash");

    // setting content
    taskHeading.textContent = taskData.taskName;
    dateElement.textContent = taskData.date;
    priorityElement.textContent = taskData.priority;

    // adding elements

    taskElement.append(priorityElement);
    taskElement.append(taskCompleteElement);
    taskElement.append(taskHeading);
    taskElement.append(dateElement);
    taskElement.append(trashElement);

    // add task to container
    tasksContainerElement.append(taskElement);

    taskCompleteElement.addEventListener("click", handleTaskCompletedClick);
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
