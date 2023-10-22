// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add a click event listener to the button
addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
        // Create a new list item
        const taskItem = document.createElement("li");
        // Add the task item to the list
        taskItem.textContent = taskText;
        taskList.appendChild(taskItem);
        // Clear the input field
        taskInput.value = "";
    }
});

