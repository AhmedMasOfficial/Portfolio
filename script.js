const background = document.getElementById("blur-background");
var next = document.getElementById("next-card");
var prev = document.getElementById("prev-card");

const skillsProjectsContainer = document.getElementById('skills-projects');
const allSkillsContainer = document.getElementById('all-skills');


const all_button = document.querySelector('.all-btn');
const buttons = {
    design: "design-btn",
    video: "video-btn",
    // design3d: "design3d-btn",
    web: "web-btn",
    // mobile: "mobile-btn",
    // desktop: "desktop-btn",
    // game: "game-btn",
    // ai: "ai-btn"
};

// Add event listeners for all skill buttons
Object.keys(buttons).forEach(skillName => {
    const button = document.getElementsByClassName(buttons[skillName])[0];
    if (button) {
        button.addEventListener('click', () => {
            populateSkillProjects(skillName);
            button.classList.add('active');
            document.querySelector('.side-div').classList.add('hide');
            all_button.classList.remove('active');
            Object.keys(buttons).forEach(key => {
                if (key !== skillName) {
                    const otherButton = document.getElementsByClassName(buttons[key])[0];
                    otherButton.classList.remove('active');
                }
            });
        });
    } else {
        console.error(`Button with id ${buttons[skillName]} not found.`);
    }
});

let skills = []; // Array to store skill data

async function fetchSkills() {
    try {
        const response = await fetch('content.json');
        if (!response.ok) throw new Error('Failed to fetch content');
        const data = await response.json();
        return data.skills || []; // Ensure skills exist
    } catch (error) {
        console.error('Error fetching skills:', error);
        return []; // Return empty if error occurs
    }
}

// Fetch skills on page load
async function initialize() {
    skills = await fetchSkills();
    populateAllSkills(skills); // Populate skills once data is fetched
}

// Main entry point
initialize();
////////////////////////

// Function to create project item dynamically
function createProjectItem(project, onClickHandler) {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    const img = document.createElement('img');
    img.classList.add('item');
    img.src = project.thumbnail;
    img.alt = project.title;

    const itemDetails = document.createElement('div');
    itemDetails.classList.add('item-details');

    const itemTitle = document.createElement('h3');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = project.title;

    const itemTools = document.createElement('p');
    itemTools.classList.add('item-tools');
    itemTools.textContent = project.tools.join(" - ");

    itemDetails.append(itemTitle, itemTools);

    const itemHoverText = document.createElement('div');
    itemHoverText.classList.add('item-hover-text');
    itemHoverText.textContent = "Open Fullscreen";

    const itemGradientLayer = document.createElement('div');
    itemGradientLayer.classList.add('item-gradient-layer');

    itemContainer.onclick = onClickHandler;
    itemContainer.append(img, itemHoverText, itemGradientLayer, itemDetails);

    return itemContainer;
}

// Function to populate projects for a specific skill
function populateSkillProjects(skillName) {
    const all_container = document.querySelector('.all-container');
    const grid_container = document.querySelector('.grid-container');
    grid_container.style.display = 'grid';
    all_container.style.display = 'none';
    

    var skill = skills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
    allSkillsContainer.style.display = 'none';
    // skillsProjectsContainer.style.display = 'block';

    skillsProjectsContainer.innerHTML = ''; // Clear previous content

    skill.projects.forEach((project, index) => {
        const projectItem = createProjectItem(project, () => openFullscreen(index, skill.projects));
        skillsProjectsContainer.appendChild(projectItem);
    });
}
///////////////////////////////
//event listeners for show-all button
document.querySelector('.all-btn').addEventListener('click', () => {
    const all_container = document.querySelector('.all-container');
    all_container.style.display = 'block';
    allSkillsContainer.style.display = 'block';
    skillsProjectsContainer.style.display = 'none';
    ///
    all_button.classList.add('active');
    Object.keys(buttons).forEach(key => {
        const button = document.getElementsByClassName(buttons[key])[0];
        button.classList.remove('active');
    });
});

function populateAllSkills(skills) {
    const grid_container = document.querySelector('.grid-container');
    grid_container.style.display = 'none';
    const all_container = document.querySelector('.all-container');
    all_container.style.display = 'block';
    const allSkillsContainer = document.getElementById('all-skills');
    allSkillsContainer.style.display = 'block';

    allSkillsContainer.innerHTML = ''; // Clear previous content
    skills.forEach(skill => {
        const skillSection = document.createElement('div');
        skillSection.classList.add('all-skill-section');

        const skillTitle = document.createElement('div');
        skillTitle.classList.add('skill-title');
        skillTitle.innerHTML = `
            <h2 class="h2-skill">${skill.name}</h2>
            <i class="fa-solid fa-angle-right"></i>
        `;
        skillTitle.onclick = () => {
            populateSkillProjects(skill.name);
            document.querySelector(`.${skill.name}-btn`).classList.add('active');
            all_button.classList.remove('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const skillProjectsWrapper = document.createElement('div');
        skillProjectsWrapper.classList.add('skill-projects-wrapper'); // Wrapper for scrollable and gradient

        const skillProjects = document.createElement('div');
        skillProjects.classList.add('skill-projects'); // Container for horizontal scroll

        const gradientLayer = document.createElement('div');
        gradientLayer.classList.add('gradient-layer'); // Gradient layer

        skill.projects.forEach((project, index) => {
            const projectItem = createProjectItem(project, () => openFullscreen(index, skill.projects));
            skillProjects.appendChild(projectItem);
        });

        skillProjectsWrapper.append(skillProjects, gradientLayer); // Add gradient layer to wrapper
        skillSection.append(skillTitle, skillProjectsWrapper);
        allSkillsContainer.appendChild(skillSection);
    });
}




///////////////////////////////
//////side bar stick with dynamic height of navbar
function adjustSidebar() {
    const navbar = document.querySelector('header');
    const sidebar = document.querySelector('.side-div');

    // Get the height of the navbar
    const navbarHeight = navbar.offsetHeight;

    // Apply the height dynamically to the CSS variables
    document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);

    // Adjust the sidebar's top property
    sidebar.style.top = `${navbarHeight}px`;

    // Adjust the content wrapper margin
    // const contentWrapper = document.querySelector('.container');
    // contentWrapper.style.marginTop = `${navbarHeight}px`;
}

// Run the function on page load and window resize
window.addEventListener('load', adjustSidebar);
window.addEventListener('resize', adjustSidebar);

