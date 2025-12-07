import '/src/sass/style.scss';

const input = document.querySelector('#taskInput'),
    btn = document.querySelector('#addTaskBtn'),
    tasksBard = document.querySelector('#todoList');

const todos = [{
    id: 1,
    text: 'Тестовая задача',
    comleted: false,
    createdAt: new Date().toISOString(),
    order: 0,
}, {
    id: 2,
    text: 'Тестовая задача-2',
    comleted: false,
    createdAt: new Date().toISOString(),
    order: 1,
}];
const addTask = () => {
    btn.addEventListener('click', () => {
        todos.unshift({
            id: 3,
            text: input.value,
            comleted: false,
            createdAt: new Date().toISOString(),
            order: 0
        });
        input.value = '';
        renderTask();
    })
};
const renderTask = () => {
    tasksBard.innerHTML = todos.map((res, i) => {
        return `
        <li class="task-item" data-id=${i} draggable="true">
                    <div class="drag-handle">
                        <i class="fas fa-grip-vertical"></i>
                    </div>
                    <input type="checkbox" class="task-checkbox" id=${res.id} data-id=${i}>
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