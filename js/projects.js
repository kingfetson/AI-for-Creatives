// projects.js - Project-related functionality

// Project data
const projects = [
    {
        id: 1,
        title: "Neural Canvas",
        category: "art",
        description: "An AI-powered generative art tool that creates unique digital paintings based on text prompts.",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "#"
    },
    {
        id: 2,
        title: "Symphony AI",
        category: "music",
        description: "Machine learning system that composes original music in various genres based on mood parameters.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        link: "#"
    },
    {
        id: 3,
        title: "Prose Generator",
        category: "writing",
        description: "AI creative writing assistant that helps authors overcome writer's block with contextual suggestions.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
        link: "#"
    },
    {
        id: 4,
        title: "Design Assistant AI",
        category: "design",
        description: "Intelligent design tool that suggests layout, color, and typography based on content analysis.",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        link: "#"
    },
    {
        id: 5,
        title: "Algorithmic Artistry",
        category: "art",
        description: "Series of generative artworks created using custom algorithms and neural style transfer.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80",
        link: "#"
    },
    {
        id: 6,
        title: "Lyric Composer AI",
        category: "writing",
        description: "AI system that generates poetic lyrics for songs based on themes and emotional tones.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        link: "#"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize projects functionality
function initProjects() {
    // Render all projects on page load
    renderProjects(projects);
    
    // Initialize filter buttons
    initFilterButtons();
}

// Initialize filter buttons
function initFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter and render projects
            const filter = this.getAttribute('data-filter');
            const filteredProjects = filterProjects(filter);
            renderProjects(filteredProjects);
        });
    });
}

// Filter projects by category
function filterProjects(category) {
    if (category === 'all') {
        return projects;
    }
    return projects.filter(project => project.category === category);
}

// Render projects to the grid
function renderProjects(projectsToRender) {
    // Clear the grid
    projectsGrid.innerHTML = '';
    
    // Check if there are no projects
    if (projectsToRender.length === 0) {
        projectsGrid.innerHTML = `
            <div class="no-projects">
                <i class="fas fa-search"></i>
                <h3>No projects found</h3>
                <p>Try selecting a different category</p>
            </div>
        `;
        return;
    }
    
    // Create and append project cards
    projectsToRender.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.setAttribute('data-category', project.category);
    
    projectCard.innerHTML = `
        <div class="project-img" style="background-image: url('${project.image}');"></div>
        <div class="project-content">
            <span class="project-category">${formatCategory(project.category)}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.link}" class="project-link" style="display: none;">View Project</a>
        </div>
    `;
    
    // Add click event to navigate to project page
    projectCard.addEventListener('click', function() {
        if (project.link && project.link !== '#') {
            window.open(project.link, '_blank');
        }
    });
    
    return projectCard;
}

// Format category name (e.g., "art" -> "Generative Art")
function formatCategory(category) {
    const categoryMap = {
        'art': 'Generative Art',
        'music': 'AI Music',
        'writing': 'Creative Writing',
        'design': 'AI Design'
    };
    
    return categoryMap[category] || category.charAt(0).toUpperCase() + category.slice(1);
}

// Get project by ID
function getProjectById(id) {
    return projects.find(project => project.id === id);
}

// Get projects by category
function getProjectsByCategory(category) {
    return projects.filter(project => project.category === category);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initProjects);

// Export functions for use in other modules
export { 
    projects, 
    filterProjects, 
    renderProjects, 
    getProjectById, 
    getProjectsByCategory 
};
