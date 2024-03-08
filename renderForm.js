import { addToDatabase } from "./database.js";
import { renderTasks } from "./renderTaks.js";

export function renderForm() {
  //create element
  const formElement = document.createElement("form");
  const tasknameElement = document.createElement("input");
  const dateElement = document.createElement("input");
  const priorityElement = document.createElement("select");
  const descriptionElement = document.createElement("textarea");
  const submitElement = document.createElement("button");
  const tasksElement = document.createElement("section");

  //attach attributes
  //   formElement.setAttribute("method", "post");
  tasknameElement.setAttribute("type", "text");
  tasknameElement.setAttribute("name", "name");
  dateElement.setAttribute("type", "date");
  dateElement.setAttribute("name", "date");
  submitElement.setAttribute("type", "submit");
  priorityElement.setAttribute("name", "priority");
  descriptionElement.setAttribute("name", "description");

  //attach class
  formElement.classList.add("form");
  tasknameElement.classList.add("form-name");
  dateElement.classList.add("form-date");
  priorityElement.classList.add("form-priority");
  descriptionElement.classList.add("form-description");
  tasksElement.classList.add("form-tasks");

  //setting content
  submitElement.textContent = "Submit";
  const priorityOptions = ["Low", "Medium", "High"];
  priorityOptions.forEach((optionText, index) => {
    const option = document.createElement("option");
    // option.value = optionText.toLowerCase();
    option.value = index;
    option.textContent = optionText;
    priorityElement.appendChild(option);
  });
  //append element
  formElement.append(tasknameElement);
  formElement.append(dateElement);
  formElement.append(priorityElement);
  formElement.append(descriptionElement);
  formElement.append(submitElement);

  const formContainer = document.querySelector(".form-container");
  formContainer.append(formElement);
  formContainer.append(tasksElement);

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      addData();
      renderTasks();
    } catch (error) {
      console.error(error);
    }
  });

  function addData() {
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    if (formData.get("name")) {
      addToDatabase(data);
    } else {
      throw new Error("Enter task name");
    }
  }
}
