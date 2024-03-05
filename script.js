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

const modal = document.querySelector(".modal");
const blur = document.querySelector(".blur");
const del = document.querySelector(".delete");
const edit = document.querySelector(".edit");

settingMinimumDate();

repopulateTaskFromStorage();

addButton.addEventListener("click", handleAddButtonClick);
clearButton.addEventListener("click", handleClearButtonClick);
sortButton.addEventListener("click", handleSortButtonClick);

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAddButtonClick();
});

blur.addEventListener("click", () => handleBlurClick(modal, blur, edit));
del.addEventListener("click", () => handleModalDeleteClick(modal, blur));
edit.addEventListener("click", () => handleModalEditClick(modal));

function settingMinimumDate() {
  const dateElement = document.querySelector(".dateSelector");
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  dateElement.min = formattedDate;
}
