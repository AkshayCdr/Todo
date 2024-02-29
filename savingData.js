const taskNameInput = document.querySelector(".taskName");
const descriptionInput = document.querySelector(".description");
const prioritySelect = document.querySelector(".prioritySelect");
const dateSelector = document.querySelector(".dateSelector");
// const addButton = document.querySelector(".add");

export function saveToLocalStorage() {
  const taskName = taskNameInput.value;
  const description = descriptionInput.value;
  const priority = prioritySelect.value;
  const date = dateSelector.value;
  const isOverlined =
    document.querySelector(".taskHeading").style.textDecoration ===
    "line-through";

  const tasks = getTasksLocalStorage();

  tasks.push({
    taskName: taskName,
    description: description,
    priority: priority,
    date: date,
    overlined: isOverlined,
  });

  saveTasksToLocalStorage(tasks);

  taskNameInput.value = "";
  descriptionInput.value = "";
  prioritySelect.value = "";
  dateSelector.value = "";
}

export function getTasksLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function updateLocalStorage(e) {
  const data = JSON.parse(localStorage.getItem("tasks"));
  const taskElemenet = e.target.nextElementSibling;
  const taskName = e.target.nextElementSibling.textContent;
  // console.log(data);
  const updatedData = data.map((ele) => {
    if (ele.taskName === taskName) {
      taskElemenet.style.textDecoration === "line-through"
        ? (ele.overlined = true)
        : (ele.overlined = false);
    }
    return ele;
  });

  localStorage.setItem("tasks", JSON.stringify(updatedData));
  // console.log(updatedDate);
}
