document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("addTaskBtn");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");


  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();


    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }


    const li = document.createElement("li");
    li.className = "task";


    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "taskCheckbox";
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed", checkbox.checked);
    });


    // Task text span
    const span = document.createElement("span");
    span.textContent = taskText;


    // --- Edit Button ---
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "editBtn";


    editBtn.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      input.className = "editInput";


      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.className = "saveBtn";


      saveBtn.addEventListener("click", () => {
        const newText = input.value.trim();
        if (newText === "") {
          alert("Task cannot be empty.");
          return;
        }
        span.textContent = newText;
        li.replaceChild(span, input);
        li.replaceChild(editBtn, saveBtn);
      });


      li.replaceChild(input, span);
      li.replaceChild(saveBtn, editBtn);
      input.focus();
    });


    // --- Delete Button ---
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";


    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });


    // Add all parts to list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);


    taskInput.value = "";
  });
});