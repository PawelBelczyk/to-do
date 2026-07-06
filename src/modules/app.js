import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { renderProjects, renderTodos, setupAddTodoForm } from "./dom.js";
import { loadProjects, saveProjects } from "./storage.js";

let projects = loadProjects().map(p => {
    const project = new Project(p.name);

    if (p.todos) {
        p.todos.forEach(t => {
            project.addTodo(new Todo(
                t.title,
                t.description,
                t.dueDate,
                t.priority
            ));
        });
    }

    return project;
});

let activeProject;

function initApp() {
    if (projects.length === 0) {
        const defaultProject = new Project("JavaScript");
        projects.push(defaultProject);
        saveProjects(projects);
        activeProject = defaultProject;
    } else {
        activeProject = projects[0];
    }

    renderProjects(projects, selectProject);
    renderTodos(activeProject, deleteTodo);
}

function selectProject(project) {
    activeProject = project;
    renderTodos(activeProject, deleteTodo);
}

function addTodo(title, description, dueDate, priority) {
    if (!activeProject) return;

    const todo = new Todo(title, description, dueDate, priority);
    activeProject.addTodo(todo);

    saveProjects(projects);
    renderTodos(activeProject, deleteTodo);
}

function deleteTodo(todo) {
    const index = activeProject.todos.indexOf(todo);
    activeProject.todos.splice(index, 1);

    saveProjects(projects);
    renderTodos(activeProject, deleteTodo);
}

setupAddTodoForm(addTodo);
initApp();