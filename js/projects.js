// projects.js - Project-related functionality with extensive dummy projects

// Comprehensive project data
const projects = [
    // ========== GENERATIVE ART PROJECTS ==========
    {
        id: 1,
        title: "Neural Canvas",
        category: "art",
        description: "An AI-powered generative art tool that creates unique digital paintings based on text prompts. Uses GANs to transform descriptions into visual masterpieces.",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
        tech: ["GANs", "Python", "TensorFlow", "React"],
        status: "Active",
        year: "2023",
        featured: true
    },
    {
        id: 2,
        title: "Algorithmic Dreams",
        category: "art",
        description: "Interactive installation that generates dream-like landscapes using neural style transfer and procedural algorithms.",
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1158&q=80",
        tech: ["Style Transfer", "Three.js", "Node.js"],
        status: "Exhibited",
        year: "2022"
    },
    {
        id: 3,
        title: "Fractal Vision",
        category: "art",
        description: "Real-time fractal generator enhanced with AI to create infinite variations of mathematical beauty.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tech: ["WebGL", "GLSL", "JavaScript"],
        status: "Ongoing",
        year: "2023"
    },
    
    // ========== AI MUSIC PROJECTS ==========
    {
        id: 4,
        title: "Symphony AI",
        category: "music",
        description: "Machine learning system that composes original music in various genres based on mood parameters and user preferences.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tech: ["Magenta", "TensorFlow", "MIDI", "Python"],
        status: "Active",
        year: "2023",
        featured: true
    },
    {
        id: 5,
        title: "Neural Beats",
        category: "music",
        description: "AI-powered beat generation tool that learns from existing music to create unique drum patterns and rhythms.",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tech: ["LSTM", "Audio Processing", "Web Audio API"],
        status: "Beta",
        year: "2023"
    },
    {
        id: 6,
        title: "Harmony ML",
        category: "music",
        description: "Algorithm that generates harmonious chord progressions and melodies using deep learning.",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tech: ["Deep Learning", "Music Theory", "Python"],
        status: "Research",
        year: "2022"
    },
    
    // ========== CREATIVE WRITING PROJECTS ==========
    {
        id: 7,
        title: "Prose Generator",
        category: "writing",
        description: "AI creative writing assistant that helps authors overcome writer's block with contextual suggestions and plot ideas.",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80",
        tech: ["GPT-3", "NLP", "React", "Node.js"],
        status: "Active",
        year: "2023",
        featured: true
    },
    {
        id: 8,
        title: "Lyric Composer AI",
        category: "writing",
        description: "AI system that generates poetic lyrics for songs based on themes, emotional tones, and musical genres.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
        tech: ["Transformers", "Python", "Flask"],
        status: "Active",
        year: "2023"
    },
    {
        id: 9,
        title: "Story Weaver",
        category: "writing",
        description: "Interactive storytelling platform where AI collaborates with users to create unique narratives.",
        image: "https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1183&q=80",
        tech: ["AI Storytelling", "Vue.js", "FastAPI"],
        status: "Prototype",
        year: "2022"
    },
    
    // ========== AI DESIGN PROJECTS ==========
    {
        id: 10,
        title: "Design Assistant AI",
        category: "design",
        description: "Intelligent design tool that suggests layout, color schemes, and typography based on content analysis.",
        image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tech: ["Computer Vision", "Figma API", "React"],
        status: "Active",
        year: "2023",
        featured: true
    },
    {
        id: 11,
        title: "Auto-Layout ML",
        category: "design",
        description: "Machine learning model that automatically generates optimal UI layouts based on content hierarchy.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80",
        tech: ["ML", "UI/UX", "Python"],
        status: "Research",
        year: "2023"
    },
    {
        id: 12,
        title: "Color Theory AI",
        category: "design",
        description: "AI system that generates harmonious color palettes based on brand identity and psychological principles.",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1176&q=80",
        tech: ["Color Science", "JavaScript", "API"],
        status: "Production",
        year: "2022"
    },
    
    // ========== INTERACTIVE INSTALLATIONS ==========
    {
        id: 13,
        title: "Neural Sculpture",
        category: "art",
        description: "Physical installation that changes form based on real-time AI analysis of viewer emotions.",
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
        tech: ["Computer Vision", "Arduino", "3D Printing"],
        status: "Exhibited",
        year: "2022"
    },
    {
        id: 14,
        title: "Interactive Sound Garden",
        category: "music",
        description: "Immersive audio-visual experience where AI generates music based on visitor movements.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tech: ["Motion Tracking", "Max/MSP", "Projection"],
        status: "Installation",
        year: "2023"
    },
    
    // ========== AI FOR GAMES ==========
    {
        id: 15,
        title: "Procedural World Generator",
        category: "art",
        description: "AI that creates unique game worlds with coherent ecosystems, terrain, and narrative elements.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
        tech: ["Procedural Generation", "Unity", "C#"],
        status: "Active",
        year: "2023"
    }
];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectsCount = document.getElementById('projectsCount');

// Initialize projects functionality
function initProjects() {
    // Update projects count
    if (projectsCount) {
        projectsCount.textContent = projects.length;
    }
    
    // Render all projects on page load
    renderProjects(projects);
    
    // Initialize filter buttons
    initFilterButtons();
    
    // Initialize project statistics
    updateProjectStatistics();
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
            
            // Update count for filtered projects
            if (projectsCount) {
                projectsCount.textContent = filteredProjects.length;
            }
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

// Update project statistics
function updateProjectStatistics() {
    const stats = {
        art: projects.filter(p => p.category === 'art').length,
        music: projects.filter(p => p.category === 'music').length,
        writing: projects.filter(p => p.category === 'writing').length,
        design: projects.filter(p => p.category === 'design').length,
        featured: projects.filter(p => p.featured).length,
        active: projects.filter(p => p.status === 'Active').length
    };
    
    // Could display these stats somewhere in the UI
    console.log('Project Statistics:', stats);
}

// Render projects to the grid
function renderProjects(projectsToRender) {
    // Clear the grid
    projectsGrid.innerHTML = '';
    
    // Check if there are no projects
    if (projectsToRender.length === 0) {
        projectsGrid.innerHTML = `
            <div class="no-projects" style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--primary); margin-bottom: 20px;"></i>
                <h3 style="margin-bottom: 10px;">No projects found</h3>
                <p style="color: var(--gray);">Try selecting a different category</p>
            </div>
        `;
        return;
    }
    
    // Sort featured projects first
    const sortedProjects = [...projectsToRender].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });
    
    // Create and append project cards
    sortedProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.className = `project-card ${project.featured ? 'featured' : ''}`;
    projectCard.setAttribute('data-category', project.category);
    
    // Add featured badge if applicable
    const featuredBadge = project.featured ? '<span class="featured-badge"><i class="fas fa-star"></i> Featured</span>' : '';
    
    projectCard.innerHTML = `
        <div class="project-img" style="background-image: url('${project.image}');">
            ${featuredBadge}
        </div>
        <div class="project-content">
            <div class="project-header">
                <span class="project-category">${formatCategory(project.category)}</span>
                <span class="project-year">${project.year}</span>
            </div>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            
            <div class="project-tech">
                ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                ${project.tech.length > 3 ? `<span class="tech-tag">+${project.tech.length - 3} more</span>` : ''}
            </div>
            
            <div class="project-footer">
                <span class="project-status ${project.status.toLowerCase()}">${project.status}</span>
                <a href="#" class="view-project-btn" data-id="${project.id}">View Details <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `;
    
    // Add click event for view details
    const viewBtn = projectCard.querySelector('.view-project-btn');
    viewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        showProjectDetails(project.id);
    });
    
    // Add overall click event
    projectCard.addEventListener('click', function(e) {
        if (!e.target.closest('.view-project-btn')) {
            showProjectDetails(project.id);
        }
    });
    
    return projectCard;
}

// Show project details in modal
function showProjectDetails(projectId) {
    const project = getProjectById(projectId);
    if (!project) return;
    
    // Create modal HTML
    const modalHTML = `
        <div class="project-modal" id="projectModal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close"><i class="fas fa-times"></i></button>
                
                <div class="modal-header">
                    <div class="modal-image" style="background-image: url('${project.image}');"></div>
                    <div class="modal-title-section">
                        <span class="modal-category">${formatCategory(project.category)}</span>
                        <h2>${project.title}</h2>
                        <div class="modal-meta">
                            <span class="modal-year"><i class="far fa-calendar"></i> ${project.year}</span>
                            <span class="modal-status ${project.status.toLowerCase()}"><i class="fas fa-circle"></i> ${project.status}</span>
                            ${project.featured ? '<span class="modal-featured"><i class="fas fa-star"></i> Featured Project</span>' : ''}
                        </div>
                    </div>
                </div>
                
                <div class="modal-body">
                    <div class="modal-description">
                        <h3><i class="fas fa-info-circle"></i> Project Overview</h3>
                        <p>${project.description}</p>
                        
                        <div class="modal-tech">
                            <h3><i class="fas fa-code"></i> Technologies Used</h3>
                            <div class="tech-list">
                                ${project.tech.map(tech => `<span class="tech-tag large">${tech}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div class="modal-details">
                            <h3><i class="fas fa-cogs"></i> Project Details</h3>
                            <p>This project demonstrates the intersection of AI and creativity, showcasing how machine learning algorithms can enhance human creative expression. The implementation combines cutting-edge AI techniques with intuitive user interfaces to create accessible creative tools.</p>
                            <p>Key innovations include real-time generation, adaptive learning from user inputs, and seamless integration of AI suggestions into creative workflows.</p>
                        </div>
                    </div>
                    
                    <div class="modal-sidebar">
                        <div class="modal-links">
                            <h3><i class="fas fa-external-link-alt"></i> Project Links</h3>
                            <a href="#" class="modal-link"><i class="fab fa-github"></i> View on GitHub</a>
                            <a href="#" class="modal-link"><i class="fas fa-globe"></i> Live Demo</a>
                            <a href="#" class="modal-link"><i class="fas fa-file-alt"></i> Case Study</a>
                        </div>
                        
                        <div class="modal-similar">
                            <h3><i class="fas fa-project-diagram"></i> Similar Projects</h3>
                            ${getSimilarProjects(project.id, project.category).map(similar => `
                                <div class="similar-project">
                                    <span class="similar-category">${formatCategory(similar.category)}</span>
                                    <h4>${similar.title}</h4>
                                    <a href="#" class="view-similar" data-id="${similar.id}">View <i class="fas fa-arrow-right"></i></a>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button class="btn" onclick="window.open('#', '_blank')"><i class="fas fa-external-link-alt"></i> Open Project</button>
                    <button class="btn btn-secondary close-modal">Close</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
    
    // Add modal styles if not already present
    addModalStyles();
    
    // Add event listeners
    const modal = document.getElementById('projectModal');
    const closeBtns = modal.querySelectorAll('.modal-close, .close-modal, .modal-overlay');
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
        });
    });
    
    // Add event listeners for similar projects
    modal.querySelectorAll('.view-similar').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const similarId = parseInt(this.getAttribute('data-id'));
            document.body.removeChild(modal);
            document.body.style.overflow = 'auto';
            setTimeout(() => showProjectDetails(similarId), 100);
        });
    });
}

// Get similar projects (excluding current)
function getSimilarProjects(currentId, category, limit = 2) {
    return projects
        .filter(p => p.id !== currentId && p.category === category)
        .slice(0, limit);
}

// Format category name
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

// Add modal styles
function addModalStyles() {
    if (document.getElementById('modal-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'modal-styles';
    style.textContent = `
        .project-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: relative;
            background: var(--dark);
            border-radius: var(--border-radius);
            max-width: 1200px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            z-index: 2001;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }
        
        .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 2002;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
        }
        
        .modal-close:hover {
            background: var(--primary);
        }
        
        .modal-header {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 40px;
            background: var(--dark-light);
        }
        
        .modal-image {
            height: 300px;
            border-radius: var(--border-radius);
            background-size: cover;
            background-position: center;
        }
        
        .modal-title-section {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        
        .modal-title-section h2 {
            font-size: 2.5rem;
            margin: 10px 0;
        }
        
        .modal-meta {
            display: flex;
            gap: 20px;
            margin-top: 15px;
            flex-wrap: wrap;
        }
        
        .modal-meta span {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--gray);
        }
        
        .modal-featured {
            color: #ffd700 !important;
        }
        
        .modal-body {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
            padding: 40px;
        }
        
        .modal-description h3,
        .modal-sidebar h3 {
            font-size: 1.3rem;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .modal-description p {
            margin-bottom: 20px;
            color: var(--gray);
            line-height: 1.8;
        }
        
        .tech-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }
        
        .tech-tag.large {
            padding: 8px 16px;
            background: rgba(108, 99, 255, 0.2);
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .modal-links {
            margin-bottom: 30px;
        }
        
        .modal-link {
            display: block;
            padding: 12px 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            margin-bottom: 10px;
            transition: var(--transition);
        }
        
        .modal-link:hover {
            background: rgba(108, 99, 255, 0.2);
            transform: translateX(5px);
        }
        
        .modal-link i {
            margin-right: 10px;
        }
        
        .similar-project {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 15px;
        }
        
        .similar-category {
            font-size: 0.8rem;
            color: var(--primary);
            display: block;
            margin-bottom: 5px;
        }
        
        .similar-project h4 {
            font-size: 1rem;
            margin-bottom: 10px;
        }
        
        .view-similar {
            color: var(--primary);
            font-size: 0.9rem;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }
        
        .modal-footer {
            padding: 30px 40px;
            background: var(--dark-light);
            display: flex;
            justify-content: flex-end;
            gap: 20px;
        }
        
        @media (max-width: 992px) {
            .modal-header,
            .modal-body {
                grid-template-columns: 1fr;
            }
            
            .modal-header {
                padding: 30px;
            }
            
            .modal-image {
                height: 200px;
            }
        }
        
        @media (max-width: 768px) {
            .modal-content {
                max-height: 95vh;
            }
            
            .modal-title-section h2 {
                font-size: 2rem;
            }
            
            .modal-body {
                padding: 30px 20px;
            }
            
            .modal-footer {
                padding: 20px;
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initProjects);

// Export functions
export { 
    projects, 
    filterProjects, 
    renderProjects, 
    getProjectById, 
    getProjectsByCategory 
};
