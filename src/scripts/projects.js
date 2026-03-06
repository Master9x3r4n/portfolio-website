
import projects from "./data/project_data.js";

const containerEl = $("#projects-container");

const renderProject = (project) => {
    const firstHalf = `
        <div class="project-container">
            <div class="project-content">
                <div class="project-header">
                    <div class="project-title">
                        ${project.name}
                    </div>
                    <div class="project-link">
                        <a href="${project.link}" target="_blank">
                            <span class="material-symbols-outlined">open_in_new</span>
                        </a>
                    </div>
                </div>
                <div class="project-description">
                    ${project.description}
                </div>
                <div class="labels-container">
                    <ul>`;                    

    let labels = "";
    for (let j = 0; j < project.tags.length; j ++) {
        labels += `<li>${project.tags[j]}</li>`
    }
                    
    const secondHalf = `
                    </ul>
                </div>
            </div>
        </div>`
    ;
    return firstHalf + labels + secondHalf
}

const renderProjects = () => {

    containerEl.html(" ");
    for (let j = 0; j < projects.length; j ++) {
        containerEl.append(renderProject(projects[j]));
    }
}

renderProjects();