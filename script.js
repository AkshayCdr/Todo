import { repopulateTaskFromStorage } from "./repopulateTask.js";
import { handleAddButtonClick } from "./AddButton.js";
import {
  handleBlurClick,
  handleModalDeleteClick,
  handleModalEditClick,
  handleClearButtonClick,
  handleSortButtonClick,
} from "./EventListeners.js";

const addButton = document.querySelector(".add");
const clearButton = document.querySelector(".clear");
const sortButton = document.querySelector(".sort");

//To repopulate tasks from storage
repopulateTaskFromStorage();

//To add new events
addButton.addEventListener("click", handleAddButtonClick);
clearButton.addEventListener("click", handleClearButtonClick);
sortButton.addEventListener("click", handleSortButtonClick);

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAddButtonClick();
});

//modal events
const modal = document.querySelector(".modal");
const blur = document.querySelector(".blur");
const del = document.querySelector(".delete");
const edit = document.querySelector(".edit");

blur.addEventListener("click", () => handleBlurClick(modal, blur, edit));
del.addEventListener("click", () => handleModalDeleteClick(modal, blur));
edit.addEventListener("click", () => handleModalEditClick(modal));
