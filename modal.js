import { getTasksLocalStorage } from "./savingData.js";

export function addDataInModal(e) {
  const task = e.target;

  //return if the element is not task
  const tasknameElement = task.querySelector(".taskHeading");
  if (!tasknameElement) return null;

  const taskName = task.querySelector(".taskHeading").textContent;
  //   console.log(taskName);
  const data = getTasksLocalStorage();
  let description, priority, date, overlined;

  data.forEach((task) => {
    if (task.taskName === taskName) {
      ({ description, priority, date, overlined } = task);
    }
  });

  const modal = document.querySelector(".modal");
  const modalTaskName = document.querySelector(".modalTaskName");
  const modalDate = document.querySelector(".modalDate");
  const modalDescription = document.querySelector(".modalDescription");
  const modalPriority = document.querySelector(".modalPriority");

  modalTaskName.textContent = taskName;
  modalDate.textContent = date;
  modalDescription.textContent = description;
  modalPriority.textContent = priority;
}

export function editModal(modal) {
  //get data from modal
  const modalTaskName = modal.querySelector(".modalTaskName");
  const modalDate = modal.querySelector(".modalDate");
  const modalDescription = modal.querySelector(".modalDescription");
  const modalPriority = modal.querySelector(".modalPriority");
  //create input elements
  //populate data from model to element
  //remove the modal elementes
  //add newly created elements
  //get data from the input
  //if clicked save - save event - storage
}
