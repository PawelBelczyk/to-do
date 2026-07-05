
import {Todo} from "./todo.js";
import {Project} from "./project.js";

 


const projects = [];

function createProject(name) {
    const project = new Project(name);
    projects.push(project);
    return project;
}


const js = createProject("JavaScript");

console.log(projects);