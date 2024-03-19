export function addToDatabase(data) {
  const savedData = getItemFromStorage() || [];
  savedData.push(data);
  setItemToLocalStorage(savedData);
}

function updateDatabase() {}

function deleteDatabase() {}

export function getItemFromStorage() {
  return JSON.parse(localStorage.getItem("tasks"));
}

function setItemToLocalStorage(data) {
  localStorage.setItem("tasks", JSON.stringify(data));
}
