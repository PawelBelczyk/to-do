const projectsContainer = document.querySelector("#projects");
const todosContainer = document.querySelector("#todos");

export function renderProjects(projects, onSelectProject, activeProject) {
    projectsContainer.innerHTML = "";

    projects.forEach(project => {
        const div = document.createElement("div");
        div.textContent = project.name;

        if (activeProject && project.name === activeProject.name) {
            div.style.fontWeight = "bold";
            div.style.color = "blue";
        }

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

        // 🔥 klasa zależna od priority
        div.classList.add("todo");
        div.classList.add(`priority-${todo.priority}`);

        div.innerHTML = `
            <strong>${todo.title}</strong>
            <p>${todo.description}</p>
            <small>📅 ${todo.dueDate}</small>
            <small>⚡ ${todo.priority}</small>
            <button class="delete-btn">❌</button>
        `;

        div.querySelector(".delete-btn").addEventListener("click", () => {
            onDeleteTodo(todo);
        });

        todosContainer.appendChild(div);
    });
}


export function setupAddProjectForm(onAddProject) {
    const button = document.querySelector("#add-project");

    button.addEventListener("click", () => {
        const name = document.querySelector("#project-name").value.trim();

        if (name === "") return;

        onAddProject(name);

        document.querySelector("#project-name").value = "";
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