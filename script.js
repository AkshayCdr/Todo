const input = document.querySelector(".taskName");
const button = document.querySelector(".btn");
const clearButton = document.querySelector(".clear");

//add button is clicked
button.addEventListener("click", handleClick);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleClick();
});
clearButton.addEventListener("click", handleClearButtonClick);

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
  if (!input.value) return null;
  const container = document.querySelector(".container");
  const tasks = document.createElement("div");
  const task = document.createElement("div");
  const p = document.createElement("p");
  //creating icons
  const circleIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const checkMark = document.createElement("i");

  p.textContent = input.value;
  input.value = "";

  //adding classess icon
  circleIcon.classList.add("fa-regular", "fa-circle", "circle");
  trashIcon.classList.add("fa-solid", "fa-trash", "trash");

  tasks.classList.add("tasks");
  task.classList.add("task");

  //adding icon to page
  task.append(circleIcon);
  task.append(p);
  task.append(trashIcon);
  tasks.append(task);
  container.append(tasks);

  //handling mouse click
  p.addEventListener("click", handlePClick);
  trashIcon.addEventListener("click", handleTrash);

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
      //creating icons
      const circleIcon = document.createElement("i");
      const trashIcon = document.createElement("i");
      const checkIcon = document.createElement("i");

      p.textContent = ele.text;

      //adding classess icon
      if (ele.overlined) {
        p.style.textDecoration = "line-through";
        // p.style.textDecorationThickness = "3px";
        checkIcon.classList.add("fa-solid", "fa-check", "circle");
      } else {
        circleIcon.classList.add("fa-regular", "fa-circle", "circle");
      }

      trashIcon.classList.add("fa-solid", "fa-trash", "trash");

      tasks.classList.add("tasks");
      task.classList.add("task");

      //adding icon to page
      ele.overlined ? task.append(checkIcon) : task.append(circleIcon);
      task.append(p);
      task.append(trashIcon);
      tasks.append(task);
      container.append(tasks);

      //handling mouse click
      p.addEventListener("click", handlePClick);
      trashIcon.addEventListener("click", handleTrash);

      //   saveTasks();
    });
  }
}

//saving the task in the local storage
function saveTasks() {
  const p = document.getElementsByTagName("p");
  const tasks = [];
  [...p].forEach((ele) => {
    const isOverlined = ele.style.textDecoration === "line-through";
    tasks.push({
      text: ele.textContent,
      overlined: isOverlined,
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
