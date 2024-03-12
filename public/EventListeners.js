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

function setTaskComplete(event) {
  event.target.classList.remove("fa-regular", "fa-circle");
  event.target.classList.add("fa-solid", "fa-check");
}

function setTaskNotComplete(event) {
  event.target.classList.remove("fa-solid", "fa-check");
  event.target.classList.add("fa-regular", "fa-circle");
}

export function handleTaskCompletedClick(event) {
  if (event.target.classList.contains("fa-regular", "fa-circle")) {
    setTaskComplete(event);
    completeTask = true;
  } else if (event.target.classList.contains("fa-solid", "fa-check")) {
    setTaskNotComplete(event);
    completeTask = false;
  }

  const taskName = event.target.nextElementSibling;
  taskName.style.textDecoration === "line-through"
    ? (taskName.style.textDecoration = "")
    : (taskName.style.textDecoration = "line-through");

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
}

function showModal() {
  blur.classList.remove("hide");
  modal.classList.remove("hide");
}

function hideModal() {
  modal.classList.add("hide");
  blur.classList.add("hide");
}

export function handleTaskClick(event, data) {
  event.stopPropagation();

  addDataInModal(event, data);
  showModal();

  blur.addEventListener("click", () => handleBlurClick(data));
  del.addEventListener("click", () => handleModalDeleteClick(data));
  edit.addEventListener("click", (event) => handleModalEditClick(event, data));
}

export function handleBlurClick() {
  hideModal();
  if (edit.classList.contains("hide")) changeModalMode(modal);
}

export function handleModalDeleteClick(data) {
  const taskName = modal.querySelector(".modalTaskName");
  const updatedData = data.filter(
    (task) => task.taskName !== taskName.textContent
  );
  saveTasksToLocalStorage(updatedData);
  handleBlurClick();
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
let dataToSave;
export function handleModalEditClick(event, data) {
  event.stopPropagation();
  console.log(event);
  console.log(event.target);
  debugger;
  dataToSave = data;
  toShowSaveButton();
  name = editModal(modal);
  save.addEventListener("click", (event) => handleModalSaveClick(event));
}

function handleModalSaveClick(event) {
  debugger;
  event.stopPropagation();
  toShowEditButton();
  //get Data from modal and store the data to the local storage
  getDataModal(name, dataToSave);
  updateModal(modal);
  //main function will get updated data and repopulate the dom with new value
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
