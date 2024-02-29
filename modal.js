import { getTasksLocalStorage, saveTasksToLocalStorage } from "./savingData.js";

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

  // const modal = document.querySelector(".modal");
  // const modalTaskName = document.querySelector(".modalTaskName");
  // const modalDate = document.querySelector(".modalDate");
  // const modalDescription = document.querySelector(".modalDescription");
  // const modalPriority = document.querySelector(".modalPriority");

  const modal = document.querySelector(".modal");
  const modalTaskName = modal.querySelector(".modalTaskName");
  const modalDate = modal.querySelector(".modalDate");
  const modalDescription = modal.querySelector(".modalDescription");
  const modalPriority = modal.querySelector(".modalPriority");

  modalTaskName.textContent = taskName;
  modalDate.textContent = date;
  modalDescription.textContent = description;
  modalPriority.textContent = priority;
}

export function editModal(modal) {
  //modal elements to append
  const modalHeader = modal.querySelector(".modalHeader");
  const modalDescr = modal.querySelector(".disc");
  const modalPrior = modal.querySelector(".prior");
  //get data from modal
  const modalTaskName = modal.querySelector(".modalTaskName");
  const modalDate = modal.querySelector(".modalDate");
  const modalDescription = modal.querySelector(".modalDescription");
  const modalPriority = modal.querySelector(".modalPriority");
  //create input elements
  const taskNameInput = document.createElement("input");
  const dateInput = document.createElement("input");
  const descriptionInput = document.createElement("input");
  const priorityInput = document.createElement("input");

  taskNameInput.setAttribute("type", "text");
  dateInput.setAttribute("type", "date");
  descriptionInput.setAttribute("type", "text");
  priorityInput.setAttribute("type", "text");

  taskNameInput.classList.add("taskName", "taskname");
  dateInput.classList.add("dateSelector", "dateinput");
  descriptionInput.classList.add("description", "descp");
  priorityInput.classList.add("prioritySelect", "priorityselect");
  //populate data from model to element

  const name = modalTaskName.textContent;

  taskNameInput.value = modalTaskName.textContent;
  dateInput.value = modalDate.textContent;
  descriptionInput.value = modalDescription.textContent;
  priorityInput.value = modalPriority.textContent;

  //remove the modal elements
  modalTaskName.remove();
  modalDate.remove();
  modalDescription.remove();
  modalPriority.remove();
  //add newly created elements
  modalHeader.append(taskNameInput);
  modalHeader.append(dateInput);
  modalDescr.append(descriptionInput);
  modalPrior.append(priorityInput);
  //get data from the input

  //if clicked save - save event - storage
  return name;
}

export function updateModal(modal) {
  //modal elements to append
  const modalHeader = modal.querySelector(".modalHeader");
  const modalDescr = modal.querySelector(".disc");
  const modalPrior = modal.querySelector(".prior");
  //get data
  const taskname = modal.querySelector(".taskName");
  const dateinput = modal.querySelector(".dateinput");
  const descp = modal.querySelector(".descp");
  const priorityselect = modal.querySelector(".priorityselect");
  //create Element
  const modalTaskName = document.createElement("h1");
  const modalDate = document.createElement("p");
  const modalDescription = document.createElement("p");
  const modalPriority = document.createElement("p");
  //adding class
  modalTaskName.classList.add("modalTaskName");
  modalDate.classList.add("modalDate");
  modalDescription.classList.add("modalDescription");
  modalPriority.classList.add("modalPriority");

  //adding value
  modalTaskName.textContent = taskname.value;
  modalDate.textContent = dateinput.value;
  modalDescription.textContent = descp.value;
  modalPriority.textContent = priorityselect.value;
  //remove elements
  taskname.remove();
  dateinput.remove();
  descp.remove();
  priorityselect.remove();
  //add elements
  modalHeader.append(modalTaskName);
  modalHeader.append(modalDate);
  modalDescr.append(modalDescription);
  modalPrior.append(modalPriority);
}

export function getDataModal(name) {
  const taskName = document.querySelector(".taskname").value;
  const date = document.querySelector(".dateinput").value;
  const description = document.querySelector(".descp").value;
  const priority = document.querySelector(".priorityselect").value;

  const data = getTasksLocalStorage();

  //update the data using name

  const updatedData = data.map((task) => {
    if (task.taskName === name) {
      (task.taskName = taskName),
        (task.date = date),
        (task.description = description),
        (task.priority = priority);
    }
    return task;
  });

  saveTasksToLocalStorage(updatedData);
}
