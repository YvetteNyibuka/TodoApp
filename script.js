document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-button");
    const taskInput = document.getElementById("task-input");
    const dueDateInput = document.getElementById("due-date-input");
    const categoryInput = document.getElementById("category-input");
    const taskList = document.querySelector(".task_list");

    addButton.addEventListener("click", function (event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (taskText === "") {
            return; // Do nothing if the input is empty
        }

        const dueDate = dueDateInput.value;
        const category = categoryInput.value;

        const task = {
            text: taskText,
            date: dueDate,
            category: category
        };

        // Get existing tasks from local storage or initialize an empty array
        const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        
        // Add the new task to the array
        existingTasks.push(task);
        
        // Save the updated array back to local storage
        localStorage.setItem("tasks", JSON.stringify(existingTasks));

        // Clear the input fields
        taskInput.value = "";
        dueDateInput.value = "";
        categoryInput.value = "";

        // Create task container and elements for the new task
        const taskContainer = document.createElement("div");
        taskContainer.className = "task1";

        const taskContent = document.createElement("div");
        taskContent.textContent = task.text;
        taskContent.className = "task-content";

        const taskDueDate = document.createElement("div");
        taskDueDate.textContent = task.date;
        taskDueDate.className = "due-date";

        const taskCategory = document.createElement("div");
        taskCategory.textContent = task.category;
        taskCategory.className = "category";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", function () {
            taskInput.value = task.text;
            dueDateInput.value = task.date;
            categoryInput.value = task.category;

            // Remove the task from the array
            const index = existingTasks.findIndex(t => t.text === task.text);
            if (index !== -1) {
                existingTasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(existingTasks));
                taskContainer.remove();
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            // Remove the task from the array
            const index = existingTasks.findIndex(t => t.text === task.text);
            if (index !== -1) {
                existingTasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(existingTasks));
                taskContainer.remove();
            }
        });

        // Append elements to the task container
        taskContainer.appendChild(taskContent);
        taskContainer.appendChild(taskDueDate);
        taskContainer.appendChild(taskCategory);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);

        // Append the task container to the task list
        taskList.appendChild(taskContainer);
    });

    // Fetch stored tasks from local storage and populate the task list div
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach(task => {
        const taskContainer = document.createElement("div");
        taskContainer.className = "task1";

        const taskContent = document.createElement("div");
        taskContent.textContent = task.text;
        taskContent.className = "task-content";

        const taskDueDate = document.createElement("div");
        taskDueDate.textContent = task.date;
        taskDueDate.className = "due-date";

        const taskCategory = document.createElement("div");
        taskCategory.textContent = task.category;
        taskCategory.className = "category";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", function () {
            taskInput.value = task.text;
            dueDateInput.value = task.date;
            categoryInput.value = task.category;

            // Remove the task from the array
            const index = storedTasks.findIndex(t => t.text === task.text);
            if (index !== -1) {
                storedTasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(storedTasks));
                taskContainer.remove();
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            // Remove the task from the array
            const index = storedTasks.findIndex(t => t.text === task.text);
            if (index !== -1) {
                storedTasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(storedTasks));
                taskContainer.remove();
            }
        });

        // Append elements to the task container
        taskContainer.appendChild(taskContent);
        taskContainer.appendChild(taskDueDate);
        taskContainer.appendChild(taskCategory);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);

        // Append the task container to the task list
        taskList.appendChild(taskContainer);
    });
});
