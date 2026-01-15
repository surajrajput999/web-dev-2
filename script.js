// ==========================================
// PART 1: To-Do List Logic
// ==========================================

// 1. Add Task Function
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please write a task first!");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create new list item (li)
  const li = document.createElement("li");

  // HTML structure: Clickable text + Delete Button
  li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;

  // Append to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// 2. Remove Single Task
function removeTask(button) {
  const li = button.parentElement;
  li.remove();
}

// 3. Toggle Complete (Strikethrough effect)
function toggleComplete(span) {
  const li = span.parentElement;
  li.classList.toggle("completed");
}

// 4. Handle 'Enter' Key Press
function handleEnter(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

// 5. Clear All Tasks
function clearAllTasks() {
  const taskList = document.getElementById("taskList");
  if (taskList.children.length === 0) {
    alert("List is already empty!");
    return;
  }

  if (confirm("Are you sure you want to delete ALL tasks?")) {
    taskList.innerHTML = "";
  }
}

// ==========================================
// PART 2: Form Validation Logic
// ==========================================

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Stop page reload

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");

    // Reset errors
    nameError.style.display = "none";
    emailError.style.display = "none";

    let isValid = true;

    // Validate Name
    if (name === "") {
      nameError.innerText = "Name is required.";
      nameError.style.display = "block";
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.innerText = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    }

    // Success Message
    if (isValid) {
      alert("Form Submitted Successfully!");
      document.getElementById("contactForm").reset();
    }
  });
