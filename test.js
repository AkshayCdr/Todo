// const input = document.querySelector(".taskName");
// const button = document.querySelector(".btn");
// const clearButton = document.querySelector(".clear");

// //add button is clicked
// button.addEventListener("click", handleClick);
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") handleClick();
// });
// clearButton.addEventListener("click", handleClearButtonClick);

// function handleClearButtonClick() {
//   const tasks = document.querySelectorAll(".tasks");
//   [...tasks].forEach((task) => {
//     task.remove();
//   });
//   localStorage.removeItem("tasks");
//   //   saveTasks();
// }

// function handleClick() {
//   const input = document.querySelector(".taskName");
//   if (!input.value) return null;
//   const container = document.querySelector(".container");
//   const tasks = document.createElement("div");
//   const task = document.createElement("div");
//   const p = document.createElement("p");
//   //creating icons
//   const circleIcon = document.createElement("i");
//   const trashIcon = document.createElement("i");
//   const checkMark = document.createElement("i");

//   p.textContent = input.value;
//   input.value = "";

//   //adding classess icon
//   circleIcon.classList.add("fa-regular", "fa-circle", "circle");
//   trashIcon.classList.add("fa-solid", "fa-trash", "trash");

//   tasks.classList.add("tasks");
//   task.classList.add("task");

//   //adding icon to page
//   task.append(circleIcon);
//   task.append(p);
//   task.append(trashIcon);
//   tasks.append(task);
//   container.append(tasks);

//   //handling mouse click
//   p.addEventListener("click", handlePClick);
//   trashIcon.addEventListener("click", handleTrash);

//   saveTasks();
// }

// repopulateTasks();
// function repopulateTasks() {
//   const data = JSON.parse(localStorage.getItem("tasks"));
//   if (data) {
//     data.forEach((ele) => {
//       const container = document.querySelector(".container");
//       const tasks = document.createElement("div");
//       const task = document.createElement("div");
//       const p = document.createElement("p");
//       //creating icons
//       const circleIcon = document.createElement("i");
//       const trashIcon = document.createElement("i");

//       p.textContent = ele;

//       //adding classess icon
//       circleIcon.classList.add("fa-regular", "fa-circle", "circle");
//       trashIcon.classList.add("fa-solid", "fa-trash", "trash");

//       tasks.classList.add("tasks");
//       task.classList.add("task");

//       //adding icon to page
//       task.append(circleIcon);
//       task.append(p);
//       task.append(trashIcon);
//       tasks.append(task);
//       container.append(tasks);

//       //handling mouse click
//       p.addEventListener("click", handlePClick);
//       trashIcon.addEventListener("click", handleTrash);
//     });
//   }
// }

// function saveTasks() {
//   const p = document.getElementsByTagName("p");
//   const tasks = [];
//   [...p].forEach((ele) => {
//     tasks.push(ele.textContent);
//   });
//   //   console.log(typeof tasks);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// //Marking the task
// function handlePClick(e) {
//   const p = e.target;
//   //line through

//   if (p.style.textDecoration === "line-through") {
//     p.style.textDecoration = "";
//   } else if (p.style.textDecoration === "") {
//     p.style.textDecoration = "line-through";
//     // p.style.textDecorationThickness = "3px";
//   }

//   const circle = p.previousSibling;

//   //changing the circle to check
//   if (circle.classList.contains("fa-regular", "fa-circle")) {
//     circle.classList.remove("fa-regular", "fa-circle");
//     circle.classList.add("fa-solid", "fa-check");
//   } else if (circle.classList.contains("fa-solid", "fa-check")) {
//     circle.classList.remove("fa-solid", "fa-check");
//     circle.classList.add("fa-regular", "fa-circle");
//   }
// }

// //Deleting the task
// function handleTrash(e) {
//   const trash = e.target;
//   const tasks = trash.parentElement.parentElement;

//   //   console.log(trash.previousSibling.textContent);
//   //   console.log(localStorage.getItem("tasks"));
//   //   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
//   //   storedTasks.forEach((el) => {
//   //     console.log(el);
//   //   });

//   //removing task from dom
//   tasks.remove();
//   saveTasks();
// }

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
// ---------------------------

// const input = document.querySelector(".taskName");
// const button = document.querySelector(".btn");
// const clearButton = document.querySelector(".clear");

// //add button is clicked
// button.addEventListener("click", handleClick);
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") handleClick();
// });
// clearButton.addEventListener("click", handleClearButtonClick);

// function handleClearButtonClick() {
//   const tasks = document.querySelectorAll(".tasks");
//   [...tasks].forEach((task) => {
//     task.remove();
//   });
//   localStorage.removeItem("tasks");
//   //   saveTasks();
// }

// function handleClick() {
//   const input = document.querySelector(".taskName");
//   if (!input.value) return null;
//   const container = document.querySelector(".container");
//   const tasks = document.createElement("div");
//   const task = document.createElement("div");
//   const p = document.createElement("p");
//   //creating icons
//   const circleIcon = document.createElement("i");
//   const trashIcon = document.createElement("i");
//   const checkMark = document.createElement("i");

//   p.textContent = input.value;
//   input.value = "";

//   //adding classess icon
//   circleIcon.classList.add("fa-regular", "fa-circle", "circle");
//   trashIcon.classList.add("fa-solid", "fa-trash", "trash");

//   tasks.classList.add("tasks");
//   task.classList.add("task");

//   //adding icon to page
//   task.append(circleIcon);
//   task.append(p);
//   task.append(trashIcon);
//   tasks.append(task);
//   container.append(tasks);

//   //handling mouse click
//   p.addEventListener("click", handlePClick);
//   trashIcon.addEventListener("click", handleTrash);

//   saveTasks();
// }

// repopulateTasks();
// function repopulateTasks() {
//   const data = JSON.parse(localStorage.getItem("tasks"));
//   console.log(data);
//   //   data.forEach((ele) => console.log(ele["text"]));
//   if (data) {
//     data.forEach((ele) => {
//       const container = document.querySelector(".container");
//       const tasks = document.createElement("div");
//       const task = document.createElement("div");
//       const p = document.createElement("p");
//       //creating icons
//       const circleIcon = document.createElement("i");
//       const trashIcon = document.createElement("i");
//       const checkIcon = document.createElement("i");

//       p.textContent = ele.text;

//       //adding classess icon
//       if (ele.overlined) {
//         p.style.textDecoration = "line-through";
//         checkIcon.classList.add("fa-solid", "fa-check", "circle");
//       } else {
//         circleIcon.classList.add("fa-regular", "fa-circle", "circle");
//       }

//       trashIcon.classList.add("fa-solid", "fa-trash", "trash");

//       tasks.classList.add("tasks");
//       task.classList.add("task");

//       //adding icon to page
//       ele.overlined ? task.append(checkIcon) : task.append(circleIcon);
//       task.append(p);
//       task.append(trashIcon);
//       tasks.append(task);
//       container.append(tasks);

//       //handling mouse click
//       p.addEventListener("click", handlePClick);
//       trashIcon.addEventListener("click", handleTrash);

//       //   saveTasks();
//     });
//   }
// }

// function saveTasks() {
//   const p = document.getElementsByTagName("p");
//   const tasks = [];
//   [...p].forEach((ele) => {
//     const isOverlined = ele.style.textDecoration === "line-through";
//     tasks.push({
//       text: ele.textContent,
//       overlined: isOverlined,
//     });
//   });
//   //   console.log(typeof tasks);
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// //Marking the task
// function handlePClick(e) {
//   const p = e.target;
//   //line through

//   if (p.style.textDecoration === "line-through") {
//     p.style.textDecoration = "";
//   } else if (p.style.textDecoration === "") {
//     p.style.textDecoration = "line-through";
//     // p.style.textDecorationThickness = "3px";
//   }

//   const circle = p.previousSibling;

//   //changing the circle to check
//   if (circle.classList.contains("fa-regular", "fa-circle")) {
//     circle.classList.remove("fa-regular", "fa-circle");
//     circle.classList.add("fa-solid", "fa-check");
//   } else if (circle.classList.contains("fa-solid", "fa-check")) {
//     circle.classList.remove("fa-solid", "fa-check");
//     circle.classList.add("fa-regular", "fa-circle");
//   }

//   saveTasks();
// }

// //Deleting the task
// function handleTrash(e) {
//   const trash = e.target;
//   const tasks = trash.parentElement.parentElement;

//   //   console.log(trash.previousSibling.textContent);
//   //   console.log(localStorage.getItem("tasks"));
//   //   const storedTasks = JSON.parse(localStorage.getItem("tasks"));
//   //   storedTasks.forEach((el) => {
//   //     console.log(el);
//   //   });

//   //removing task from dom
//   tasks.remove();
//   saveTasks();
// }

// const stringParser = (input) => {
//   if (!input.startsWith('"')) return null;

//   input = input.slice(1);

//   let result = "";
//   while (input[0] !== '"') {
//     if (input[0] === "\\") {
//       let sChar = specialCharParser(input);

//       if (sChar !== null) {
//         result += sChar[0];
//         input = sChar[1];
//       } else return null;
//     } else {
//       result += input[0];
//       input = input.slice(1);
//     }
//   }
//   return [result, input.slice(1)];
// };

// const specialCharParser = (input) => {
//   let escChar = input[1];
//   let sChar = "";
//   switch (escChar) {
//     case "\\":
//       sChar = "\\";
//       break;
//     case "/":
//       sChar = "/";
//       break;
//     case "b":
//       sChar = "\b";
//       break;
//     case "f":
//       sChar = "\f";
//       break;
//     case "n":
//       sChar = "\n";
//       break;
//     case "t":
//       sChar = "\t";
//       break;
//     case "r":
//       sChar = "\r";
//       break;
//     case '"':
//       sChar = '"';
//       break;
//     case "u":
//       let hex = input.slice(2, 6);
//       if (!hex.match(/[0-9A-Fa-f]{4}/)) {
//         break;
//       }
//       if (parseInt(hex, 16) >= 0 && parseInt(hex, 16) <= 31) {
//         break;
//       }
//       sChar = String.fromCharCode(parseInt(hex, 16));
//       break;
//   }
//   if (sChar.length === 0) return null;
//   if (escChar === "u") {
//     return [sChar, input.slice(6)];
//   } else {
//     return [sChar, input.slice(2)];
//   }
// };
// let str = fs.readFileSync("data.json", "utf8");
// let str = '"a\\u001fb"';
// console.log(stringParser('"a\\u001fB"'));
// console.log("Json.parse:", JSON.parse(str));
// // console.log(JSON.parse('"this\\u"'));

// let str1 = "hai\\u1F468";
// console.log(JSON.parse(str1));

const input = document.querySelector(".taskName");
const button = document.querySelector(".btn");
const clearButton = document.querySelector(".clear");

//add event on task to show modal

//add button is clicked
button.addEventListener("click", handleClick);
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleClick();
  // console.log(e.key);
  if (e.key === "Escape") handleEscapeClick();
});
clearButton.addEventListener("click", handleClearButtonClick);

function handleEscapeClick() {
  const modal = document.querySelector(".modal");
  if (modal.style.display === "block") modal.style.display = "none";
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

  // console.log(descriptionInput.value);
  // console.log(priorityInput.value);
  //creating modal

  if (!input.value) return null;
  const container = document.querySelector(".container");
  const tasks = document.createElement("div");
  const task = document.createElement("div");
  const p = document.createElement("p");
  const date = document.createElement("div");

  //creating icons
  const circleIcon = document.createElement("i");
  const trashIcon = document.createElement("i");
  const checkMark = document.createElement("i");

  p.textContent = input.value;

  description.textContent = descriptionInput.value;

  input.value = "";

  //adding classess icon
  circleIcon.classList.add("fa-regular", "fa-circle", "circle");
  trashIcon.classList.add("fa-solid", "fa-trash", "trash");

  description.classList.add("hide", "description");

  tasks.classList.add("tasks");
  task.classList.add("task");

  //adding icon to page

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

      //creating icons
      const circleIcon = document.createElement("i");
      const trashIcon = document.createElement("i");
      const checkIcon = document.createElement("i");

      p.textContent = ele.text;

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

  taskName.textContent = e.target.querySelector("p").textContent;
  date.textContent = e.target.querySelector(".date").textContent;
  priority.textContent =
    e.target.querySelector(".priority").textContent || "none";
  description.textContent =
    e.target.querySelector(".description").textContent || "none";
  modal.style.display = "block";

  modal.style.display = "block";
}

//saving the task in the local storage
function saveTasks() {
  // const p = document.getElementsByTagName("p");
  const task = document.querySelectorAll(".task");
  const tasks = [];
  [...task].forEach((ele) => {
    // const isOverlined = ele.style.textDecoration === "line-through";
    // tasks.push({
    //   text: ele.textContent,
    //   overlined: isOverlined,
    // });
    // console.log(ele);
    const text = ele.querySelector("p").textContent;
    const date = ele.querySelector(".date").textContent;
    const description = ele.querySelector(".description").textContent;
    const priority = ele.querySelector(".priority").textContent;

    const isOverlined =
      ele.querySelector("p").style.textDecoration === "line-through";

    // console.log(text);
    // console.log(date);
    // console.log(isOverlined);
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
