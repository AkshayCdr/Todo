// const taskNameInput = document.querySelector(".taskName");
// const descriptionInput = document.querySelector(".description");
// const prioritySelect = document.querySelector(".prioritySelect");
// const dateSelector = document.querySelector(".dateSelector");

// const addButton = document.querySelector(".add");

// //clear dom
// //add elements from local storage
// function repopulateTaskFromStorage() {
//   const tasks = getTasksLocalStorage();
//   const tasksContainer = document.querySelector(".tasks");

//   // clearing  tasks
//   tasksContainer.innerHTML = "";

//   // Iterate over tasks and create elements
//   tasks.forEach((taskData) => {
//     const taskElement = document.createElement("div");
//     const circleElement = document.createElement("i");
//     // const checkElement = document.createElement("i");
//     const taskHeading = document.createElement("p");
//     const dateElement = document.createElement("div");
//     const trashElement = document.createElement("i");

//     // adding classes
//     taskElement.classList.add("task");
//     taskData.overlined
//       ? (circleElement.classList.add("fa-solid", "fa-check", "circle"),
//         (taskHeading.style.textDecoration = "line-through"))
//       : circleElement.classList.add("fa-regular", "fa-circle", "circle");

//     taskHeading.classList.add("taskHeading");
//     dateElement.classList.add("date");
//     trashElement.classList.add("fa-solid", "fa-trash", "trash");

//     // setting content
//     taskHeading.textContent = taskData.taskName;
//     dateElement.textContent = taskData.date;

//     // adding elements

//     taskElement.append(circleElement);
//     taskElement.append(taskHeading);
//     taskElement.append(dateElement);
//     taskElement.append(trashElement);

//     // add task to container
//     tasksContainer.append(taskElement);

//     circleElement.addEventListener("click", handleCircleClick);
//     trashElement.addEventListener("click", handleTrashClick);
//     // checkElement.addEventListener("click", handleCheckClick);
//   });
// }
// function handleTrashClick(e) {
//   // console.log(e.target);
// }

// function handleCircleClick(e) {
//   // console.log(e);
//   if (e.target.classList.contains("fa-regular", "fa-circle")) {
//     e.target.classList.remove("fa-regular", "fa-circle");
//     e.target.classList.add("fa-solid", "fa-check");
//   } else if (e.target.classList.contains("fa-solid", "fa-check")) {
//     e.target.classList.remove("fa-solid", "fa-check");
//     e.target.classList.add("fa-regular", "fa-circle");
//   }

//   const taskName = e.target.nextElementSibling;
//   taskName.style.textDecoration === "line-through"
//     ? (taskName.style.textDecoration = "")
//     : (taskName.style.textDecoration = "line-through");

//   // saveToLocalStorage();
//   updateLocalStorage(e);
// }

// function updateLocalStorage(e) {
//   const data = JSON.parse(localStorage.getItem("tasks"));
//   const taskElemenet = e.target.nextElementSibling;
//   const taskName = e.target.nextElementSibling.textContent;
//   // console.log(data);
//   const updatedData = data.map((ele) => {
//     if (ele.taskName === taskName) {
//       taskElemenet.style.textDecoration === "line-through"
//         ? (ele.overlined = true)
//         : (ele.overlined = false);
//     }
//     return ele;
//   });

//   localStorage.setItem("tasks", JSON.stringify(updatedData));
//   // console.log(updatedDate);
// }

// // Repopulate tasks w
// repopulateTaskFromStorage();

// addButton.addEventListener("click", handleAddButtonClick);

// function handleAddButtonClick() {
//   const taskName = taskNameInput.value;
//   //   const description = descriptionInput.value;
//   //   const priority = prioritySelect.value;
//   const date = dateSelector.value;

//   if (!taskName) return null;

//   //parent element tasks
//   const tasks = document.querySelector(".tasks");

//   //create tasks dom
//   const taskElement = document.createElement("div");
//   const circleElement = document.createElement("i");
//   const taskHeading = document.createElement("p");
//   const dateElement = document.createElement("div");
//   const trashElement = document.createElement("i");

//   //adding class to element
//   taskElement.classList.add("task");
//   circleElement.classList.add("fa-regular", "fa-circle", "circle");
//   taskHeading.classList.add("taskHeading");
//   dateElement.classList.add("date");
//   trashElement.classList.add("fa-solid", "fa-trash", "trash");

//   //adding value to element
//   taskHeading.textContent = taskName;
//   dateElement.textContent = date;

//   //adding element to task
//   taskElement.append(circleElement);
//   taskElement.append(taskHeading);
//   taskElement.append(dateElement);
//   taskElement.append(trashElement);

//   //adding to tasks
//   tasks.append(taskElement);

//   //adding to local storage
//   saveToLocalStorage();

//   circleElement.addEventListener("click", handleCircleClick);
//   // checkElement.addEventListener("click", handleCheckClick);
// }

// function getTasksLocalStorage() {
//   return JSON.parse(localStorage.getItem("tasks")) || [];
// }
// function saveTasksToLocalStorage(tasks) {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }
// function saveToLocalStorage() {
//   const taskName = taskNameInput.value;
//   const description = descriptionInput.value;
//   const priority = prioritySelect.value;
//   const date = dateSelector.value;
//   const isOverlined =
//     document.querySelector(".taskHeading").style.textDecoration ===
//     "line-through";

//   const tasks = getTasksLocalStorage();

//   tasks.push({
//     taskName: taskName,
//     description: description,
//     priority: priority,
//     date: date,
//     overlined: isOverlined,
//   });

//   saveTasksToLocalStorage(tasks);

//   taskNameInput.value = "";
//   descriptionInput.value = "";
//   prioritySelect.value = "";
//   dateSelector.value = "";
// }
