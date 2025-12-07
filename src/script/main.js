import '/src/sass/style.scss';

const input = document.querySelector('#taskInput'),
    btn = document.querySelector('#addTaskBtn'),
    tasksBard = document.querySelector('#todoList');

// const generedId = () => {

// }

const todos = [{
    id: 1,
    text: 'Тестовая задача',
    completed: false,
    createdAt: new Date().toISOString(),
    order: 0,
}, {
    id: 2,
    text: 'Тестовая задача-2',
    completed: true,
    createdAt: new Date().toISOString(),
    order: 1,
}];

const addTask = () => {
    btn.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            todos.unshift({
                id: 3,
                text: input.value,
                completed: false,
                createdAt: new Date().toISOString(),
                order: 0
            });
            input.value = '';
            renderTask();
        } else {
            console.log('Введите данные')
        }

    })
};
const renderTask = () => {
    tasksBard.innerHTML = todos.map(res => {
        return `
        <li class="task-item" data-id=${res.id} draggable="true">
                    <div class="drag-handle">
                        <i class="fas fa-grip-vertical"></i>
                    </div>
                    <input type="checkbox" class="task-checkbox" id=${res.id} data-id=${res.id}>
                    <div class="task-content">
                        <div class="task-text">
                            ${res.text}
                            <span class="task-priority priority-high">Высокий</span>
                        </div>
                        <div class="task-date">
                            <i class="far fa-clock"></i> ${res.createdAt}
                        </div>
                    </div>
                    <button class="delete-btn" data-id="1" aria-label="Удалить задачу">
    <i class="fas fa-times"></i>
</button>
                </li>
        `
    });

};
addTask();
renderTask();