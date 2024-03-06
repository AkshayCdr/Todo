import { repopulateTaskFromStorage } from "./repopulateTask.js";
import {
  handleClearButtonClick,
  handleSortButtonClick,
  handleAddButtonClick,
} from "./EventListeners.js";
import { getTasksLocalStorage } from "./savingData.js";

export function main() {
  const addButton = document.querySelector(".add");
  const clearButton = document.querySelector(".clear");
  const sortButton = document.querySelector(".sort");

  setMinimumDate();

  const data = getTasksLocalStorage();

  if (data) repopulateTaskFromStorage(data);

  addButton.addEventListener("click", handleAddButtonClick);
  clearButton.addEventListener("click", () => handleClearButtonClick());
  sortButton.addEventListener("click", () => handleSortButtonClick(data));

  window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") handleAddButtonClick();
  });
}

main();

function setMinimumDate() {
  const dateElement = document.querySelector(".dateSelector");
  const date = new Date();
  const formattedDate = date.toISOString().split("T")[0];
  dateElement.min = formattedDate;
}
