// selection des differents elements DOM
const taskForm = getElementById('task-form');
const taskInput = getElementById('task-input');
const taskList = getElementById('task-list');
const taskCounter = getElementById('task-counter');

// fonction pour mettre a jour le compteur
function majTaskCounter() {
    const taskCount = taskList.children.length;
    taskCounter.textContent = taskCount;
}

// fonction pour ajouter une tache
