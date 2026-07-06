import { Todo } from "./todo.js";
import { Project } from "./project.js";
import {
    renderProjects,
    renderTodos,
    setupAddTodoForm,
    setupAddProjectForm
} from "./dom.js";

import { loadProjects, saveProjects } from "./storage.js";

let projects = loadProjects().map(p => {
    const project = new Project(p.name);

    if (p.todos) {
        p.todos.forEach(t => {
            project.addTodo(
                new Todo(
                    t.title,
                    t.description,
                    t.dueDate,
                    t.priority
                )
            );
        });
    }

    return project;
});

let activeProject = null;

// ================= INIT =================

function initApp() {
    if (projects.length === 0) {
        const defaultProject = new Project("JavaScript");
        projects.push(defaultProject);
        saveProjects(projects);
        activeProject = defaultProject;
    } else {
        activeProject = projects[0];
    }

    renderProjects(projects, selectProject, activeProject);
    renderTodos(activeProject, deleteTodo);
}

// ================= PROJECTS =================

function selectProject(project) {
    activeProject = project;

    renderProjects(projects, selectProject, activeProject);
    renderTodos(activeProject, deleteTodo);
}

function createProject(name) {
    const project = new Project(name);

    projects.push(project);
    activeProject = project;

    saveProjects(projects);

    renderProjects(projects, selectProject, activeProject);
    renderTodos(activeProject, deleteTodo);

    return project;
}

// ================= TODOS =================

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

// ================= FORMS =================

setupAddTodoForm(addTodo);
setupAddProjectForm(createProject);

// ================= START =================

initApp();