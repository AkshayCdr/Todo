import { getItemFromStorage } from "./database.js";

export function renderTasks() {
  const formContainer = document.querySelector(".form-container");
  const tasksElement = document.querySelector(".form-tasks");
  tasksElement.innerHTML = "";
  const tasks = getItemFromStorage() || [];

  tasks.forEach((task) => {
    // console.log(task);
    const taskElement = document.createElement("article");
    const tasknameElement = document.createElement("h2");
    const dateElement = document.createElement("span");
    const priorityElement = document.createElement("span");
    const descriptionElement = document.createElement("p");

    //add class
    taskElement.classList.add("task");
    tasknameElement.classList.add("task-name");
    dateElement.classList.add("task-date");
    priorityElement.classList.add("task-priority");
    descriptionElement.classList.add("task-description");

    //get data
    tasknameElement.textContent = task.name;
    dateElement.textContent = task.date;
    priorityElement.textContent = task.priority;
    descriptionElement.textContent = task.description;

    //append
    taskElement.append(tasknameElement);
    taskElement.append(dateElement);
    taskElement.append(priorityElement);
    taskElement.append(descriptionElement);

    tasksElement.append(taskElement);

    formContainer.append(tasksElement);
  });
}
