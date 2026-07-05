

const projectsContainer = document.querySelector("#projects");

export function renderProjects(projects) {
    projectsContainer.innerHTML ="";

    projects.forEach( project => {
        const div = document.createElement("div");
        div.textContent = project.name;

        projectsContainer.appendChild(div);
    });
}

