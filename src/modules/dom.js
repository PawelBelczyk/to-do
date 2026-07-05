

const projectsContainer = document.querySelector("#projects");

export function renderProjects(projects, onSelectProject) {
    projectsContainer.innerHTML ="";

    projects.forEach( project => {
        const div = document.createElement("div");
        div.textContent = project.name;

        div.addEventListener("click", () => {
            onSelectProject(project);
        })

        projectsContainer.appendChild(div);
    });
}


const todosContainer = document.querySelector("#todos");

export function renderTodos(project) {
    todosContainer.innerHTML ="";

    if(!project) return;

    project.todos.forEach(todo => {
        const div = document.createElement("div");
        div.textContent = todo.title;
        todosContainer.appendChild(div)
    })
}

