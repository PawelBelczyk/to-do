
import {Todo} from "./todo.js";
import {Project} from "./project.js";
import {renderProjects, renderTodos} from "./dom.js";
 
let activeProject = null;


const projects = [];

function createProject(name) {
    const project = new Project(name);
    projects.push(project);
    return project;
}

function selectProject(project) {
    activeProject = project;
    console.log("Wybrano:", activeProject);

    renderTodos(activeProject);
    
}
 

const js = createProject("JavaScript");

js.addTodo(
    new Todo("pierwsze zadanie", "opis", "2026-07-10", "high")
);
renderProjects(projects, selectProject);

