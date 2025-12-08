// projects.js - Project-related functionality with comprehensive projects

// Projects array
const projects = [
    // ========== GENERATIVE ART PROJECTS ==========
    {
        id: 1,
        title: "Neural Canvas",
        category: "art",
        description: "An AI-powered generative art tool that creates unique digital paintings based on text prompts. Uses GANs to transform descriptions into visual masterpieces.",
        image: "assets/images/ChatGPT Image.png",
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
         image: "assets/images/Futuristic Nairobi Street Vibes.png",
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
        image: "/assets/images/Gemini_Generated_Image2.png",
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
    },
    
    // ========== VIDEO DEMO PROJECTS ==========
    {
        id: 16,
        title: "AI Animation Studio",
        category: "video",
        description: "Real-time AI animation tool that generates character movements from text descriptions. Watch the demo to see how AI creates smooth animations.",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1170&q=80",
        video: "/assets/videos/generated_video_1.mp4",
        tech: ["AI Animation", "Real-time", "Three.js", "TensorFlow.js"],
        status: "Demo",
        year: "2023",
        featured: true,
        details: `<h3><i class="fas fa-cogs"></i> Video Demonstration</h3>
            <p>This video showcases the real-time AI animation capabilities of our system. Watch as simple text prompts are transformed into fluid character animations.</p>
            <p>Key features demonstrated in this video:</p>
            <ul>
                <li>Real-time text-to-animation conversion</li>
                <li>Natural movement generation using AI</li>
                <li>Multiple character support</li>
                <li>Export functionality for game development</li>
            </ul>
            <p>The AI model was trained on thousands of motion capture sequences to generate realistic human movements.</p>`,
        links: [
            { text: "Watch Full Demo", url: "#", icon: "fas fa-video" },
            { text: "GitHub Repository", url: "#", icon: "fab fa-github" },
            { text: "Documentation", url: "#", icon: "fas fa-book" }
        ],
        gallery: [
            "https://images.unsplash.com/photo-1536240478700-b869070f9279",
            "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
            "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
        ]
    },
    
    {
        id: 17,
        title: "Neural Music Visualizer",
        category: "video",
        description: "AI-powered music visualization that creates dynamic visuals synchronized with audio. Experience the demo showing real-time visual generation.",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1170&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        tech: ["Web Audio API", "Neural Networks", "Canvas", "JavaScript"],
        status: "Live",
        year: "2023"
    },
    
    {
        id: 18,
        title: "Interactive AI Art Gallery",
        category: "video",
        description: "Virtual gallery where AI-generated art responds to viewer interactions. The demo video shows the immersive experience.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1170&q=80",
        video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        tech: ["WebGL", "Interactive AI", "React", "Node.js"],
        status: "Exhibited",
        year: "2023",
        featured: true
    }
];

// DOM Elements
let projectsGrid = null;
let filterButtons = null;
let projectsCount = null;

// Initialize projects functionality
function initProjects() {
    // Get DOM elements
    projectsGrid = document.getElementById('projectsGrid');
    filterButtons = document.querySelectorAll('.filter-btn');
    projectsCount = document.getElementById('totalProjects');
    
    if (!projectsGrid) {
        console.error('Projects grid element not found!');
        return;
    }
    
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
    
    // Add project modal styles
    addProjectModalStyles();
}

// Initialize filter buttons
function initFilterButtons() {
    if (!filterButtons || filterButtons.length === 0) {
        console.warn('Filter buttons not found');
        return;
    }
    
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
        video: projects.filter(p => p.category === 'video').length,
        featured: projects.filter(p => p.featured).length,
        active: projects.filter(p => p.status === 'Active').length
    };
    
    // Update stats display if elements exist
    const artCount = document.querySelector('.stat-item:nth-child(2) .stat-number');
    const videoCount = document.querySelector('.stat-item:nth-child(4) .stat-number');
    
    if (artCount) artCount.textContent = stats.art;
    if (videoCount) videoCount.textContent = stats.video;
}

// Render projects to the grid
function renderProjects(projectsToRender) {
    // Clear the grid
    if (projectsGrid) {
        projectsGrid.innerHTML = '';
    } else {
        console.error('projectsGrid element not found');
        return;
    }
    
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
    projectCard.setAttribute('data-id', project.id);
    
    // Add video indicator badge
    const videoBadge = project.video ? '<span class="video-badge"><i class="fas fa-play-circle"></i> Video</span>' : '';
    
    projectCard.innerHTML = `
        <div class="project-img" style="background-image: url('${project.image}');">
            ${project.featured ? '<span class="featured-badge"><i class="fas fa-star"></i> Featured</span>' : ''}
            ${videoBadge}
            <div class="project-overlay">
                <i class="fas fa-expand"></i>
                <span>View ${project.video ? 'Video' : 'Project'}</span>
            </div>
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
                <span class="project-status ${getStatusClass(project.status)}">${project.status}</span>
                <button class="view-project-btn" data-id="${project.id}">
                    ${project.video ? 'Watch Video <i class="fas fa-play-circle"></i>' : 'View Details <i class="fas fa-arrow-right"></i>'}
                </button>
            </div>
        </div>
    `;
    
    // Add click event to view button
    const viewBtn = projectCard.querySelector('.view-project-btn');
    if (viewBtn) {
        viewBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const projectId = parseInt(this.getAttribute('data-id'));
            const project = getProjectById(projectId);
            if (project) {
                openProjectModal(project);
            }
        });
    }
    
    // Add click event to entire card
    projectCard.addEventListener('click', function(e) {
        if (!e.target.closest('.view-project-btn')) {
            const projectId = parseInt(this.getAttribute('data-id'));
            const project = getProjectById(projectId);
            if (project) {
                openProjectModal(project);
            }
        }
    });
    
    // Add hover effect for project overlay
    const projectImg = projectCard.querySelector('.project-img');
    const projectOverlay = projectCard.querySelector('.project-overlay');
    
    if (projectImg && projectOverlay) {
        projectImg.addEventListener('mouseenter', () => {
            projectOverlay.style.opacity = '1';
        });
        
        projectImg.addEventListener('mouseleave', () => {
            projectOverlay.style.opacity = '0';
        });
    }
    
    return projectCard;
}

// Function to open project modal
function openProjectModal(project) {
    console.log('Opening project modal for:', project.title);
    
    // Check if modal class exists
    if (typeof ProjectModal === 'undefined') {
        console.error('ProjectModal class not found. Make sure project-modal.js is loaded.');
        
        // Fallback: Show simple alert
        alert(`Project: ${project.title}\n\n${project.description}\n\nThis project uses: ${project.tech.join(', ')}`);
        return;
    }
    
    // Check if projectModal instance exists
    if (!window.projectModal) {
        console.error('projectModal instance not found. Creating fallback...');
        
        // Create a simple modal as fallback
        createFallbackModal(project);
        return;
    }
    
    // Open the modal
    try {
        window.projectModal.openModal(project);
    } catch (error) {
        console.error('Error opening modal:', error);
        createFallbackModal(project);
    }
}

// Fallback modal function
function createFallbackModal(project) {
    const modalHTML = `
        <div class="fallback-modal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 20px;
        ">
            <div style="
                background: var(--dark);
                padding: 40px;
                border-radius: 12px;
                max-width: 600px;
                width: 100%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
            ">
                <button onclick="this.parentElement.parentElement.remove()" style="
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    background: var(--primary);
                    color: white;
                    border: none;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                ">×</button>
                
                <h2 style="color: var(--primary); margin-bottom: 20px;">${project.title}</h2>
                <p style="color: var(--gray); margin-bottom: 20px;">${project.description}</p>
                
                <div style="margin: 20px 0;">
                    <strong>Technologies:</strong>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 10px;">
                        ${project.tech.map(tech => `<span style="
                            background: rgba(108, 99, 255, 0.2);
                            color: var(--primary);
                            padding: 5px 15px;
                            border-radius: 20px;
                            font-size: 0.9rem;
                        ">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div style="display: flex; justify-content: flex-end; gap: 15px; margin-top: 30px;">
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        background: var(--primary);
                        color: white;
                        border: none;
                        padding: 10px 25px;
                        border-radius: 25px;
                        cursor: pointer;
                    ">Close</button>
                </div>
            </div>
        </div>
    `;
    
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer);
    document.body.style.overflow = 'hidden';
}

// Helper function to get status CSS class
function getStatusClass(status) {
    const statusMap = {
        'Active': 'active',
        'Beta': 'beta',
        'Research': 'research',
        'Exhibited': 'exhibited',
        'Ongoing': 'ongoing',
        'Prototype': 'prototype',
        'Production': 'production',
        'Demo': 'demo',
        'Live': 'live',
        'Installation': 'installation'
    };
    return statusMap[status] || 'active';
}

// Format category name
function formatCategory(category) {
    const categoryMap = {
        'art': 'Generative Art',
        'music': 'AI Music',
        'writing': 'Creative Writing',
        'design': 'AI Design',
        'video': 'Video Demo'
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

// Add project modal styles
function addProjectModalStyles() {
    if (document.getElementById('project-modal-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'project-modal-styles';
    style.textContent = `
        .video-badge {
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(255, 87, 34, 0.9);
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 5px;
            z-index: 2;
        }
        
        .project-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(18, 9, 182, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1;
        }
        
        .project-overlay i {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        .project-overlay span {
            font-size: 1rem;
            font-weight: 500;
        }
        
        .project-card {
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3) !important;
        }
        
        .view-project-btn {
            background: transparent;
            border: none;
            color: var(--primary);
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 5px 0;
            transition: var(--transition);
            font-family: 'Poppins', sans-serif;
        }
        
        .view-project-btn:hover {
            gap: 10px;
            color: var(--secondary);
        }
        
        .project-status {
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .project-status.active {
            background: rgba(76, 175, 80, 0.2);
            color: #4caf50;
        }
        
        .project-status.beta {
            background: rgba(255, 193, 7, 0.2);
            color: #ffc107;
        }
        
        .project-status.research {
            background: rgba(33, 150, 243, 0.2);
            color: #2196f3;
        }
        
        .project-status.exhibited {
            background: rgba(156, 39, 176, 0.2);
            color: #9c27b0;
        }
        
        .project-status.ongoing {
            background: rgba(255, 87, 34, 0.2);
            color: #ff5722;
        }
        
        .project-status.prototype {
            background: rgba(158, 158, 158, 0.2);
            color: #9e9e9e;
        }
        
        .project-status.production {
            background: rgba(0, 150, 136, 0.2);
            color: #009688;
        }
        
        .project-status.demo {
            background: rgba(233, 30, 99, 0.2);
            color: #e91e63;
        }
        
        .project-status.live {
            background: rgba(0, 188, 212, 0.2);
            color: #00bcd4;
        }
        
        .project-status.installation {
            background: rgba(121, 85, 72, 0.2);
            color: #795548;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initProjects);

// Make functions globally available for debugging
window.debugProjects = {
    getProjectById,
    openProjectModal,
    projects,
    initProjects
};