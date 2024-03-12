export function addToLocalStorage(newTask) {
  const tasks = getTasksLocalStorage();
  const { taskName, date, priority, description } = newTask;

  tasks.push({
    taskName: taskName,
    description: description,
    priority: priority,
    date: date,
  });

  saveTasksToLocalStorage(tasks);
}

export function getTasksLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function updateLocalStorage(e, completeTask) {
  const data = getTasksLocalStorage();
  const taskName = e.target.nextElementSibling.textContent;
  const updatedData = data.map((ele) => {
    if (ele.taskName === taskName)
      completeTask ? (ele.overlined = true) : (ele.overlined = false);
    return ele;
  });

  localStorage.setItem("tasks", JSON.stringify(updatedData));
}
