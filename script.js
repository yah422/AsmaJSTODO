// selection des differents elements DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const taskCounter = document.getElementById('task-counter');

// fonction pour mettre a jour le compteur
function majTaskCounter() {
    const taskCount = taskList.children.length;
    taskCounter.textContent = taskCount;
}

// Fonction pour ajouter une nouvelle tâche
function addTask(e) {
    e.preventDefault();

// Créer un élément <li>
const taskItem = document.createElement('li');
taskItem.textContent = taskInput.value;

// Ajouter un bouton de suppression
const deleteButton = document.createElement('button');
deleteButton.textContent = 'Supprimer';
taskItem.appendChild(deleteButton);

// Ajouter l'événement de suppression
deleteButton.addEventListener('click', () => {
    taskItem.remove();
    majTaskCounter();
});

// Ajouter l'événement de complétion
taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
});

// Ajouter l'élément à la liste
taskList.appendChild(taskItem);

// Réinitialiser l'input
taskInput.value = '';

// Mettre à jour le compteur
majTaskCounter();
}

// Écouter l'événement de soumission du formulaire
taskForm.addEventListener('submit', addTask);