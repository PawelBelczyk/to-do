export function saveProjects(projects) {

    const myJSON = JSON.stringify(projects);
    localStorage.setItem("projects", myJSON);
}

export function loadProjects() {
const myJSON = localStorage.getItem("projects");
// najpierw pobieramy dane z localStorage 
const projects = JSON.parse(myJSON);
return projects;

}