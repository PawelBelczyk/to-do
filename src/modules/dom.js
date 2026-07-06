const projectsContainer = document.querySelector("#projects");
const todosContainer = document.querySelector("#todos");

export function renderProjects(projects, onSelectProject) {
    projectsContainer.innerHTML = "";

    projects.forEach(project => {
        const div = document.createElement("div");
        div.textContent = project.name;

        div.addEventListener("click", () => {
            onSelectProject(project);
        });

        projectsContainer.appendChild(div);
    });
}

export function renderTodos(project, onDeleteTodo) {
    todosContainer.innerHTML = "";

    if (!project) return;

    project.todos.forEach(todo => {
        const div = document.createElement("div");

        div.innerHTML = `
               <div>
         <strong>${todo.title}</strong><br>
         <span>${todo.description}</span><br>
            <small>📅 ${todo.dueDate}</small><br>
            <small>⚡ ${todo.priority}</small>
             </div>
            <button class="delete-btn">❌</button>
        `;

        div.querySelector(".delete-btn").addEventListener("click", () => {
            onDeleteTodo(todo);
        });

        todosContainer.appendChild(div);
    });
}

export function setupAddTodoForm(onAddTodo) {
    const button = document.querySelector("#add-todo");

    button.addEventListener("click", () => {
        const title = document.querySelector("#todo-title").value;
        const description = document.querySelector("#todo-description").value;
        const dueDate = document.querySelector("#todo-date").value;
        const priority = document.querySelector("#todo-priority").value;

        onAddTodo(title, description, dueDate, priority);

        document.querySelector("#todo-title").value = "";
        document.querySelector("#todo-description").value = "";
        document.querySelector("#todo-date").value = "";
        document.querySelector("#todo-priority").value = "low";
    });
}