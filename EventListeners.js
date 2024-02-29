import {
  updateLocalStorage,
  getTasksLocalStorage,
  saveTasksToLocalStorage,
} from "./savingData.js";

import { addDataInModal, editModal } from "./modal.js";
import { repopulateTaskFromStorage } from "./repopulateTask.js";

export function handleCircleClick(e) {
  // console.log(e);
  if (e.target.classList.contains("fa-regular", "fa-circle")) {
    e.target.classList.remove("fa-regular", "fa-circle");
    e.target.classList.add("fa-solid", "fa-check");
  } else if (e.target.classList.contains("fa-solid", "fa-check")) {
    e.target.classList.remove("fa-solid", "fa-check");
    e.target.classList.add("fa-regular", "fa-circle");
  }

  const taskName = e.target.nextElementSibling;
  taskName.style.textDecoration === "line-through"
    ? (taskName.style.textDecoration = "")
    : (taskName.style.textDecoration = "line-through");

  // saveToLocalStorage();
  updateLocalStorage(e);
}

export function handleTrashClick(e) {
  const task = e.target.parentElement;
  const taskName = task.querySelector(".taskHeading");
  const data = getTasksLocalStorage();

  const updatedData = data.filter(
    (task) => task.taskName !== taskName.textContent
  );

  saveTasksToLocalStorage(updatedData);

  task.remove();
}

export function handleTaskClick(e) {
  //change the data in the modal
  // console.log(e.target);
  addDataInModal(e);

  const modal = document.querySelector(".modal");
  const blur = document.querySelector(".blur");
  //blur visible
  blur.classList.remove("hide");
  //modal visible
  modal.classList.remove("hide");
}

export function handleBlurClick(modal, blur) {
  modal.classList.add("hide");
  blur.classList.add("hide");
}

export function handleModalDeleteClick(modal, blur) {
  const taskName = modal.querySelector(".modalTaskName");
  //get data
  const data = getTasksLocalStorage();
  //update Data
  const updatedData = data.filter(
    (task) => task.taskName !== taskName.textContent
  );
  //save Data after delete
  saveTasksToLocalStorage(updatedData);
  //remove blur and modal
  handleBlurClick(modal, blur);
  //reload the page
  repopulateTaskFromStorage();
}

function toShowSaveButton(save, edit) {
  edit.classList.add("hide");
  save.classList.remove("hide");
}
function toShowEditButton() {
  edit.classList.remove("hide");
  save.classList.add("hide");
}

export function handleModalEditClick(modal) {
  //show save button
  const save = modal.querySelector(".save");
  const edit = modal.querySelector(".edit");

  toShowSaveButton(save, edit);
  editModal(modal);
  save.addEventListener("click", () => handleModalSaveClick(save, edit));
}

function handleModalSaveClick(save, edit) {
  //show edit button
  toShowEditButton(save, edit);
}
