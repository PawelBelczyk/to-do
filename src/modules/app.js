
import {Todo} from "./todo.js";
import {Project} from "./project.js";
import {renderProjects, renderTodos} from "./dom.js";
import { setupAddTodoForm } from "./dom.js";
 
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

    renderTodos(activeProject, deleteTodo);
    
}

function addTodoActiveProject(title, description, dueDate, priority) {
   let todo = new Todo(title, description, dueDate, priority );
   activeProject.addTodo(todo);
   renderTodos(activeProject, deleteTodo);
}
 
setupAddTodoForm(addTodoActiveProject);

const js = createProject("JavaScript");
activeProject = js;

addTodoActiveProject("pierwsze zadanie", "opis", "2026-07-10", "high");


function deleteTodo(todo) {
    const index = activeProject.todos.indexOf(todo);
    activeProject.todos.splice(index, 1);

    renderTodos(activeProject, deleteTodo);
}

 

renderProjects(projects, selectProject);
renderTodos(activeProject, deleteTodo);
