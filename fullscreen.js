let currentProjectIndex = 0;
let currentMediaIndex = 0;
let currentProjects = [];
const full_container = document.querySelector(".full-container");


function openFullscreen(projectIndex, projects) {
    currentProjectIndex = projectIndex;
    currentProjects = projects;
    currentMediaIndex = 0;

    displayMedia();
    full_container.style.display = "block";
    background.style.display = "block";
}

function displayMedia() {
    const project = currentProjects[currentProjectIndex];
    const media = project.media[currentMediaIndex];

    // Start building the HTML structure for the full-container
    let content = '';

    // Add the media content (image or iframe)
    if (media.type === "video") {
        content += `<iframe src="${media.src}" class="full" allowfullscreen></iframe>`;
    } else if (media.type === "image") {
        content += `<img src="${media.src}" class="full"></img>`;
    }

    // Add the gradient layer
    content += `<div class="full-gradient-layer"></div>`;

    // Add the close button (cross icon)
    content += `<button class="close-button" onclick="closeFullscreen()">
                    <i class="fa-solid fa-xmark"></i>
                </button>`;

    // Add the details section
    content += `
    <div class="full-details ${project.link ? 'more-padding' : ''}">
        <div class="full-wrapper">
            <h2 class="full-title">${project.title}</h2>
            <p class="full-description">${project.description}</p>
            <p class="full-tools"><span class="keyword">Tools</span> : ${project.tools.join(" - ")}</p>
        </div>
        ${project.link ? `<a href="${project.link}" class="full-link" target="_blank">- Visit the project -</a>` : '<a></a>'}
    </div>
`;


    // Set the content of the full container
    full_container.innerHTML = content;

    // Ensure navigation buttons are updated
    updateNavButtons();
}



function closeFullscreen() {
    full_container.style.display = "none";
    background.style.display = "none";
    prev.style.display = "none";
    next.style.display = "none";
}

//  Navigation Logic
function navigateNextMedia() {
    if (currentMediaIndex < currentProjects[currentProjectIndex].media.length - 1) {
        currentMediaIndex++;
        displayMedia();
    } else {
        navigateNextProject();
    }
}

function navigatePrevMedia() {
    if (currentMediaIndex > 0) {
        currentMediaIndex--;
        displayMedia();
    } else {
        navigatePrevProject();
    }
}

function navigateNextProject() {
    if (currentProjectIndex < currentProjects.length - 1) {
        currentProjectIndex++;
        currentMediaIndex = 0;
        displayMedia();
    }
}

function navigatePrevProject() {
    if (currentProjectIndex > 0) {
        currentProjectIndex--;
        currentMediaIndex = 0;
        displayMedia();
    }
}


function updateNavButtons() {
    // Determine visibility of previous button
    if (currentProjectIndex === 0 && currentMediaIndex === 0) {
        prev.style.display = "none"; // Hide if at the start of the first project
    } else {
        prev.style.display = "block"; // Show in other cases
        const prevIcon = prev.querySelector("i");
        if (currentMediaIndex === 0) {
            // At the first media of the current project, navigating to the previous project
            prevIcon.className = "fa-solid fa-angles-left arrow"; // Double left arrow
        } else {
            // Navigating within the same project
            prevIcon.className = "fa-solid fa-angle-left arrow"; // Single left arrow
        }
    }

    // Determine visibility of next button
    if (
        currentProjectIndex === currentProjects.length - 1 &&
        currentMediaIndex === currentProjects[currentProjectIndex].media.length - 1
    ) {
        next.style.display = "none"; // Hide if at the end of the last project
    } else {
        next.style.display = "block"; // Show in other cases
        const nextIcon = next.querySelector("i");
        if (
            currentMediaIndex === currentProjects[currentProjectIndex].media.length - 1
        ) {
            // At the last media of the current project, navigating to the next project
            nextIcon.className = "fa-solid fa-angles-right arrow"; // Double right arrow
        } else {
            // Navigating within the same project
            nextIcon.className = "fa-solid fa-angle-right arrow"; // Single right arrow
        }
    }
}


// Keyboard and Button Controls //////////////////////////////////////////
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        navigateNextMedia();
    } else if (e.key === "ArrowLeft") {
        navigatePrevMedia();
    } else if (e.key === "Escape") {
        closeFullscreen();
    }
});

next.addEventListener("click", navigateNextMedia);
prev.addEventListener("click", navigatePrevMedia);

