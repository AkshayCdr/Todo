const input = document.querySelector(".taskName");
const button = document.querySelector(".btn");
const clearButton = document.querySelector(".clear");

//add event on task to show modal

//add button is clicked
button.addEventListener("click", handleClick);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleClick();
  if (e.key === "Escape") handleEscapeClick();
});
clearButton.addEventListener("click", handleClearButtonClick);

//hide modal
// window.addEventListener("click", (e) => {
//   const modal = document.querySelector(".modal");
//   if (e.target === modal) console.log("modal clicked");
// });

// window.addEventListener("click", (e) => {
//   const modal = document.querySelector(".modal");
//   const blur = document.querySelector(".blur");
//   if (e.target !== modal && !modal.contains(e.target)) {
//     modal.style.display = "none";
//     blur.style.display = "none";
//   }
// });
// function modalFunctions() {
//   const blur = document.querySelector(".blur");
//   const modal = document.querySelector(".modal");
//   const edit = modal.querySelector(".edit");
//   const del = modal.querySelector(".delete");
//   if (modal) {
//     blur.addEventListener("click", removeModal);
//     del.addEventListener("click", () => console.log("clicked del"));
//     edit.addEventListener("click", () => console.log("clicked edit"));
//   }
// }
// modalFunctions();

const blur = document.querySelector(".blur");
const modal = document.querySelector(".modal");
const edit = modal.querySelector(".edit");
const del = modal.querySelector(".delete");
if (modal) {
  blur.addEventListener("click", removeModal);
  del.addEventListener("click", () => console.log("clicked del"));
  edit.addEventListener("click", () => console.log("clicked edit"));
}

function removeModal() {
  modal.style.display = "none";
  blur.style.display = "none";
}

//hide modal using keyboard
function handleEscapeClick() {
  const modal = document.querySelector(".modal");
  if (modal.style.display === "block") {
    removeModal();
  }
}

function handleClearButtonClick() {
  const tasks = document.querySelectorAll(".tasks");
  [...tasks].forEach((task) => {
    task.remove();
  });
  localStorage.removeItem("tasks");
  //   saveTasks();
}

function handleClick() {
  const input = document.querySelector(".taskName");
  const dateInput = document.getElementById("dateSelector");
  const descriptionInput = document.getElementById("description");
  const priorityInput = document.getElementById("prioritySelect");

  // console.log(descriptionInput.value);
  // console.log(priorityInput.value);
  //creating modal

  if (!input.value) return null;
  const container = document.querySelector(".container");
  const tasks = document.createElement("div");
  const task = document.createElement("div");
  const p = document.createElement("p");
  const date = document.createElement("div");
  const description = document.createElement("div");
  const priority = document.createElement("div");
  //creating icons
  const circleIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const checkMark = document.createElement("i");

  p.textContent = input.value;
  date.textContent = dateInput.value;
  description.textContent = descriptionInput.value;
  priority.textContent = priorityInput.value;

  input.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  priorityInput.value = "";

  //adding classess icon
  circleIcon.classList.add("fa-regular", "fa-circle", "circle");
  trashIcon.classList.add("fa-solid", "fa-trash", "trash");

  description.classList.add("hide", "description");
  priority.classList.add("hide", "priority");
  date.classList.add("date");
  tasks.classList.add("tasks");
  task.classList.add("task");

  //adding icon to page
  task.append(priority);
  task.append(description);

  task.append(circleIcon);
  task.append(p);
  task.append(date);
  task.append(trashIcon);
  tasks.append(task);
  container.append(tasks);

  //handling mouse click
  p.addEventListener("click", handlePClick);
  trashIcon.addEventListener("click", handleTrash);
  tasks.querySelectorAll(".task").forEach((task) => {
    task.addEventListener("click", handleTaskClick);
  });
  saveTasks();
}

repopulateTasks();
function repopulateTasks() {
  const data = JSON.parse(localStorage.getItem("tasks"));
  console.log(data);
  //   data.forEach((ele) => console.log(ele["text"]));
  if (data) {
    data.forEach((ele) => {
      const container = document.querySelector(".container");
      const tasks = document.createElement("div");
      const task = document.createElement("div");
      const p = document.createElement("p");
      const date = document.createElement("div");
      const description = document.createElement("div"); // Add this line
      const priority = document.createElement("div"); // Add this line
      //creating icons
      const circleIcon = document.createElement("i");
      const trashIcon = document.createElement("i");
      const checkIcon = document.createElement("i");

      p.textContent = ele.text;
      date.textContent = ele.date;
      priority.textContent = ele.priority; // Add this line
      description.textContent = ele.description; // Add this line

      //adding classess icon
      if (ele.overlined) {
        p.style.textDecoration = "line-through";
        // p.style.textDecorationThickness = "3px";
        checkIcon.classList.add("fa-solid", "fa-check", "circle");
      } else {
        circleIcon.classList.add("fa-regular", "fa-circle", "circle");
      }

      trashIcon.classList.add("fa-solid", "fa-trash", "trash");

      description.classList.add("hide", "description");
      priority.classList.add("hide", "priority");

      date.classList.add("date");
      tasks.classList.add("tasks");
      task.classList.add("task");

      task.append(priority);
      task.append(description);

      //adding icon to page
      ele.overlined ? task.append(checkIcon) : task.append(circleIcon);
      task.append(p);
      task.append(date);
      task.append(trashIcon);
      tasks.append(task);
      container.append(tasks);

      //handling mouse click
      p.addEventListener("click", handlePClick);
      trashIcon.addEventListener("click", handleTrash);
      tasks.querySelectorAll(".task").forEach((task) => {
        task.addEventListener("click", handleTaskClick);
      });
      //   saveTasks();
    });
  }
}

function handleTaskClick(e) {
  // console.log(e.target);
  // console.log(e.target.querySelector("p"));
  const modal = document.querySelector(".modal");
  const taskName = modal.querySelector(".modalTaskName");
  const date = modal.querySelector(".modalDate");
  const priority = modal.querySelector(".modalPriority");
  const description = modal.querySelector(".modalDescription");
  const blur = document.querySelector(".blur");

  taskName.textContent = e.target.querySelector("p").textContent;
  date.textContent = e.target.querySelector(".date").textContent;
  priority.textContent =
    e.target.querySelector(".priority").textContent || "none";
  description.textContent =
    e.target.querySelector(".description").textContent || "none";
  modal.style.display = "block";
  blur.style.display = "block";
}

//saving the task in the local storage
function saveTasks() {
  // const p = document.getElementsByTagName("p");
  const task = document.querySelectorAll(".task");
  const tasks = [];
  [...task].forEach((ele) => {
    const text = ele.querySelector("p").textContent;
    const date = ele.querySelector(".date").textContent;
    const description = ele.querySelector(".description").textContent;
    const priority = ele.querySelector(".priority").textContent;

    const isOverlined =
      ele.querySelector("p").style.textDecoration === "line-through";
    tasks.push({
      text: text,
      overlined: isOverlined,
      date: date,
      description: description,
      priority: priority,
    });
  });
  //   console.log(typeof tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Marking the task
function handlePClick(e) {
  const p = e.target;
  //line through

  p.style.textDecoration === "line-through"
    ? (p.style.textDecoration = "")
    : (p.style.textDecoration = "line-through");

  const circle = p.previousSibling;

  //changing the circle to check
  if (circle.classList.contains("fa-regular", "fa-circle")) {
    circle.classList.remove("fa-regular", "fa-circle");
    circle.classList.add("fa-solid", "fa-check");
  } else if (circle.classList.contains("fa-solid", "fa-check")) {
    circle.classList.remove("fa-solid", "fa-check");
    circle.classList.add("fa-regular", "fa-circle");
  }

  saveTasks();
}

//Deleting the task
function handleTrash(e) {
  const trash = e.target;
  const tasks = trash.parentElement.parentElement;

  //removing task from dom
  tasks.remove();
  saveTasks();
}

//Heading , Descrption
//priority , date ,
