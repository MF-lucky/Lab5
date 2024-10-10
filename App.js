const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

// Load the task list from local storage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.addEventListener('click', () => removeTask(index));
        taskList.appendChild(li);
    });
}

// Add Task
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks)); // Save to local
        taskInput.value = ''; // Clean
        renderTasks();
    }
}

// Delete Task
function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Update Storage
    renderTasks();
}

addTaskBtn.addEventListener('click', addTask);

renderTasks();
