import {
  updateLocalStorage,
  saveTasksToLocalStorage,
  addToLocalStorage,
} from "./savingData.js";

import {
  addDataInModal,
  editModal,
  getDataModal,
  updateModal,
  changeModalMode,
} from "./modal.js";
import { repopulateTaskFromStorage } from "./repopulateTask.js";

import { main } from "./script.js";

const modal = document.querySelector(".modal");
const blur = document.querySelector(".blur");
const del = document.querySelector(".delete");
const edit = document.querySelector(".edit");
const save = modal.querySelector(".save");

const taskNameInput = document.querySelector(".taskName");
const dateSelector = document.querySelector(".dateSelector");
const prioritySelector = document.querySelector(".prioritySelect");
const descriptionInput = document.querySelector(".description");

export function handleAddButtonClick() {
  if (!taskNameInput.value) return null;
  const newTask = {
    taskName: taskNameInput.value,
    date: dateSelector.value,
    priority: prioritySelector.value,
    description: descriptionInput.value,
  };
  addToLocalStorage(newTask);

  taskNameInput.value = "";
  dateSelector.value = "";
  prioritySelector.value = "";
  descriptionInput.value = "";

  main();
}

export function handleClearButtonClick() {
  saveTasksToLocalStorage([]);
  main();
}

let completeTask = false;

export function handleTaskCompletedClick(event) {
  if (event.target.classList.contains("fa-regular", "fa-circle")) {
    event.target.classList.remove("fa-regular", "fa-circle");
    event.target.classList.add("fa-solid", "fa-check");
    completeTask = true;
  } else if (event.target.classList.contains("fa-solid", "fa-check")) {
    event.target.classList.remove("fa-solid", "fa-check");
    event.target.classList.add("fa-regular", "fa-circle");
    completeTask = false;
  }

  const taskName = event.target.nextElementSibling;
  taskName.style.textDecoration === "line-through"
    ? (taskName.style.textDecoration = "")
    : (taskName.style.textDecoration = "line-through");

  // saveToLocalStorage();
  updateLocalStorage(event, completeTask);
}

export function handleTrashClick(event, data) {
  const task = event.target.parentElement;
  const taskName = task.querySelector(".taskHeading");

  const updatedData = data.filter(
    (task) => task.taskName !== taskName.textContent
  );
  saveTasksToLocalStorage(updatedData);
  repopulateTaskFromStorage(updatedData);
  // task.remove();
}

export function handleTaskClick(event, data) {
  //change the data in the modal
  // console.log(data);
  event.stopPropagation();

  addDataInModal(event, data);

  const modal = document.querySelector(".modal");
  const blur = document.querySelector(".blur");
  //blur visible
  blur.classList.remove("hide");
  //modal visible
  modal.classList.remove("hide");

  blur.addEventListener("click", () => handleBlurClick(data));
  del.addEventListener("click", () => handleModalDeleteClick(data));
  edit.addEventListener("click", (event) => handleModalEditClick(event, data));
}

export function handleBlurClick(data) {
  console.log(data);
  modal.classList.add("hide");
  blur.classList.add("hide");
  if (edit.classList.contains("hide")) changeModalMode(modal);
  // repopulateTaskFromStorage(data);
}

export function handleModalDeleteClick(data) {
  const taskName = modal.querySelector(".modalTaskName");

  //update Data
  const updatedData = data.filter(
    (task) => task.taskName !== taskName.textContent
  );
  //save Data after delete
  saveTasksToLocalStorage(updatedData);
  //remove blur and modal
  handleBlurClick(updatedData);
  //reload the page
  repopulateTaskFromStorage(updatedData);
}

function toShowSaveButton() {
  edit.classList.add("hide");
  save.classList.remove("hide");
}
export function toShowEditButton() {
  edit.classList.remove("hide");
  save.classList.add("hide");
}
let name;
export function handleModalEditClick(event, data) {
  event.stopPropagation();
  //show save button
  console.log(data);
  debugger;
  toShowSaveButton();
  name = editModal(modal);
  console.log(name);

  save.addEventListener("click", (event) => handleModalSaveClick(event, data));
}

function handleModalSaveClick(event, data) {
  event.stopPropagation();
  //show edit button
  console.log(data);
  debugger;
  toShowEditButton();
  //save data to local storage
  getDataModal(name, data);
  //get data from local storage and change the modal
  updateModal(modal);
  //repopulate task
  main();
}

export function handleSortButtonClick(data) {
  data.sort((a, b) => {
    if (a.priority === "" && b.priority === "") return 0;
    if (a.priority === "") return 1;
    if (b.priority === "") return -1;

    return parseInt(a.priority) - parseInt(b.priority);
  });

  saveTasksToLocalStorage(data);
  repopulateTaskFromStorage(data);
}
