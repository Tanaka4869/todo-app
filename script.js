document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = input.value.trim();
        if (task) {
            addTodo(task);
            input.value = '';
        }
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => li.remove());

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});
