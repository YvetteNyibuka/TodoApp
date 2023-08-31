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

        const taskContainer = document.createElement("div");
        taskContainer.className = "task1";

        const taskContent = document.createElement("div");
        taskContent.textContent = taskText;
        taskContent.className = "task-content";

        const taskDueDate = document.createElement("div");
        taskDueDate.textContent = dueDate;
        taskDueDate.className = "due-date";

        const taskCategory = document.createElement("div");
        taskCategory.textContent = category;
        taskCategory.className = "category";

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit-button";
        editButton.addEventListener("click", function () {
            const newText = prompt("Edit task:", taskText);
            if (newText !== null) {
                taskContent.textContent = newText;
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            taskContainer.remove();
        });

        taskContainer.appendChild(taskContent);
        taskContainer.appendChild(taskDueDate);
        taskContainer.appendChild(taskCategory);
        taskContainer.appendChild(editButton);
        taskContainer.appendChild(deleteButton);

        taskList.appendChild(taskContainer);

        // Clear the input fields
        taskInput.value = "";
        dueDateInput.value = "";
        categoryInput.value = "";
    });
});
