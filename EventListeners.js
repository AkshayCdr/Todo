import {
  updateLocalStorage,
  getTasksLocalStorage,
  saveTasksToLocalStorage,
} from "./savingData.js";

import {
  addDataInModal,
  editModal,
  getDataModal,
  updateModal,
  changeModalMode,
} from "./modal.js";
import { repopulateTaskFromStorage } from "./repopulateTask.js";

export function handleClearButtonClick() {
  saveTasksToLocalStorage([]);
  repopulateTaskFromStorage();
}

let completeTask = false;

export function handleTaskCompletedClick(e) {
  if (e.target.classList.contains("fa-regular", "fa-circle")) {
    e.target.classList.remove("fa-regular", "fa-circle");
    e.target.classList.add("fa-solid", "fa-check");
    completeTask = true;
  } else if (e.target.classList.contains("fa-solid", "fa-check")) {
    e.target.classList.remove("fa-solid", "fa-check");
    e.target.classList.add("fa-regular", "fa-circle");
    completeTask = false;
  }

  const taskName = e.target.nextElementSibling;
  taskName.style.textDecoration === "line-through"
    ? (taskName.style.textDecoration = "")
    : (taskName.style.textDecoration = "line-through");

  // saveToLocalStorage();
  updateLocalStorage(e, completeTask);
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

  addDataInModal(e);

  const modal = document.querySelector(".modal");
  const blur = document.querySelector(".blur");
  //blur visible
  blur.classList.remove("hide");
  //modal visible
  modal.classList.remove("hide");
}

export function handleBlurClick(modal, blur, edit) {
  modal.classList.add("hide");
  blur.classList.add("hide");
  if (edit.classList.contains("hide")) changeModalMode(modal);
  repopulateTaskFromStorage();
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
export function toShowEditButton(save, edit) {
  edit.classList.remove("hide");
  save.classList.add("hide");
}
let name;
export function handleModalEditClick(modal) {
  //show save button
  const save = modal.querySelector(".save");
  const edit = modal.querySelector(".edit");

  toShowSaveButton(save, edit);
  name = editModal(modal);

  save.addEventListener("click", () => handleModalSaveClick(save, edit, modal));
}

function handleModalSaveClick(save, edit, modal) {
  //show edit button
  toShowEditButton(save, edit);
  //save data to local storage
  getDataModal(name);
  //get data from local storage and change the modal
  updateModal(modal);
}

export function handleSortButtonClick() {
  const data = getTasksLocalStorage();

  // data.sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
  data.sort((a, b) => {
    if (a.priority === "" && b.priority === "") return 0;
    if (a.priority === "") return 1;
    if (b.priority === "") return -1;

    return parseInt(a.priority) - parseInt(b.priority);
  });

  saveTasksToLocalStorage(data);
  repopulateTaskFromStorage();
}
