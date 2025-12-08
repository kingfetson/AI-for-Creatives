// project-modal.js - Modal functionality for projects

class ProjectModal {
    constructor() {
        this.modal = null;
        this.currentProject = null;
        this.videoPlayer = null;
        this.init();
    }

    init() {
        // Create modal HTML structure
        this.createModalStructure();
        // Add event listeners
        this.addEventListeners();
    }

    createModalStructure() {
        const modalHTML = `
            <div class="project-modal" id="projectModal" style="display: none;">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <button class="modal-close" id="modalClose">
                        <i class="fas fa-times"></i>
                    </button>
                    
                    <div class="modal-header">
                        <div class="modal-media" id="modalMedia">
                            <!-- Media content will be inserted here -->
                        </div>
                        <div class="modal-title-section">
                            <span class="modal-category" id="modalCategory"></span>
                            <h2 id="modalTitle"></h2>
                            <div class="modal-meta">
                                <span class="modal-year" id="modalYear"></span>
                                <span class="modal-status" id="modalStatus"></span>
                                <span class="modal-type" id="modalType"></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-body">
                        <div class="modal-description">
                            <h3><i class="fas fa-info-circle"></i> Project Overview</h3>
                            <p id="modalDescription"></p>
                            
                            <div class="modal-tech">
                                <h3><i class="fas fa-code"></i> Technologies Used</h3>
                                <div class="tech-list" id="modalTech"></div>
                            </div>
                            
                            <div class="modal-details" id="modalDetails">
                                <!-- Additional details will be inserted here -->
                            </div>
                        </div>
                        
                        <div class="modal-sidebar">
                            <div class="modal-links" id="modalLinks">
                                <h3><i class="fas fa-external-link-alt"></i> Project Links</h3>
                            </div>
                            
                            <div class="modal-gallery" id="modalGallery">
                                <h3><i class="fas fa-images"></i> Project Gallery</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modal-footer">
                        <div class="modal-actions" id="modalActions">
                            <!-- Action buttons will be inserted here -->
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add modal container if it doesn't exist
        let container = document.getElementById('projectModalContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'projectModalContainer';
            document.body.appendChild(container);
        }
        
        container.innerHTML = modalHTML;
        this.modal = document.getElementById('projectModal');
        
        // Add modal styles
        this.addModalStyles();
    }

    addEventListeners() {
        // Close modal on overlay click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay')) {
                this.closeModal();
            }
        });

        // Close modal on close button click
        const closeBtn = document.getElementById('modalClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.style.display === 'flex') {
                this.closeModal();
            }
        });
    }

    openModal(project) {
        console.log('Modal opening for project:', project.title);
        this.currentProject = project;
        this.updateModalContent();
        
        if (this.modal) {
            this.modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            console.log('Modal should be visible now');
        } else {
            console.error('Modal element not found');
        }
    }

    closeModal() {
        console.log('Closing modal');
        
        // Stop any playing videos
        if (this.videoPlayer) {
            this.videoPlayer.pause();
            this.videoPlayer = null;
        }

        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        this.currentProject = null;
    }

    updateModalContent() {
        if (!this.currentProject) return;

        console.log('Updating modal content for:', this.currentProject.title);
        
        // Update basic info
        document.getElementById('modalTitle').textContent = this.currentProject.title;
        document.getElementById('modalCategory').textContent = this.formatCategory(this.currentProject.category);
        document.getElementById('modalDescription').textContent = this.currentProject.description;
        document.getElementById('modalYear').innerHTML = `<i class="far fa-calendar"></i> ${this.currentProject.year}`;
        document.getElementById('modalStatus').innerHTML = `<i class="fas fa-circle"></i> ${this.currentProject.status}`;
        
        // Update project type
        const typeElement = document.getElementById('modalType');
        if (this.currentProject.video) {
            typeElement.innerHTML = '<i class="fas fa-video"></i> Video Demo';
            typeElement.className = 'modal-type video';
        } else {
            typeElement.innerHTML = '<i class="fas fa-image"></i> Image Project';
            typeElement.className = 'modal-type image';
        }

        // Update media section
        this.updateMediaSection();

        // Update technologies
        this.updateTechSection();

        // Update details
        this.updateDetailsSection();

        // Update links
        this.updateLinksSection();

        // Update gallery
        this.updateGallerySection();

        // Update actions
        this.updateActionsSection();
    }

    updateMediaSection() {
        const mediaContainer = document.getElementById('modalMedia');
        mediaContainer.innerHTML = '';

        if (this.currentProject.video) {
            // Video project
            const videoHTML = `
                <div class="video-container">
                    <video id="projectVideo" controls poster="${this.currentProject.image}" style="width:100%; height:auto;">
                        <source src="${this.currentProject.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            `;
            mediaContainer.innerHTML = videoHTML;

            // Store video reference
            this.videoPlayer = document.getElementById('projectVideo');
        } else {
            // Image project
            const imageHTML = `
                <div class="image-container" style="text-align:center;">
                    <img src="${this.currentProject.image}" alt="${this.currentProject.title}" style="max-width:100%; max-height:400px;">
                </div>
            `;
            mediaContainer.innerHTML = imageHTML;
        }
    }

    updateTechSection() {
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = '';

        if (this.currentProject.tech && this.currentProject.tech.length > 0) {
            this.currentProject.tech.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.className = 'tech-tag large';
                techTag.textContent = tech;
                techContainer.appendChild(techTag);
            });
        }
    }

    updateDetailsSection() {
        const detailsContainer = document.getElementById('modalDetails');
        
        let detailsHTML = '';
        if (this.currentProject.details) {
            detailsHTML = this.currentProject.details;
        } else {
            detailsHTML = `
                <h3><i class="fas fa-cogs"></i> Project Details</h3>
                <p>This ${this.currentProject.category} project demonstrates innovative use of artificial intelligence in creative applications.</p>
            `;
        }
        
        detailsContainer.innerHTML = detailsHTML;
    }

    updateLinksSection() {
        const linksContainer = document.getElementById('modalLinks');
        
        let linksHTML = '<h3><i class="fas fa-external-link-alt"></i> Project Links</h3>';
        
        if (this.currentProject.links && this.currentProject.links.length > 0) {
            this.currentProject.links.forEach(link => {
                linksHTML += `
                    <a href="${link.url}" class="modal-link" target="_blank">
                        <i class="${link.icon || 'fas fa-external-link-alt'}"></i> ${link.text}
                    </a>
                `;
            });
        } else {
            linksHTML += `
                <a href="#" class="modal-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
                <a href="#" class="modal-link">
                    <i class="fas fa-globe"></i> Live Demo
                </a>
            `;
        }
        
        linksContainer.innerHTML = linksHTML;
    }

    updateGallerySection() {
        const galleryContainer = document.getElementById('modalGallery');
        
        if (this.currentProject.gallery && this.currentProject.gallery.length > 0) {
            let galleryHTML = '<h3><i class="fas fa-images"></i> Project Gallery</h3><div class="gallery-grid">';
            
            this.currentProject.gallery.forEach((image, index) => {
                galleryHTML += `
                    <div class="gallery-item" data-index="${index}">
                        <img src="${image}" alt="Gallery image ${index + 1}" style="width:100%; height:100px; object-fit:cover;">
                    </div>
                `;
            });
            
            galleryHTML += '</div>';
            galleryContainer.innerHTML = galleryHTML;
        } else {
            galleryContainer.innerHTML = '';
        }
    }

    updateActionsSection() {
        const actionsContainer = document.getElementById('modalActions');
        
        let actionsHTML = '';
        if (this.currentProject.video) {
            actionsHTML = `
                <button class="btn" onclick="document.getElementById('projectVideo').play()">
                    <i class="fas fa-play"></i> Play Video
                </button>
                <button class="btn btn-secondary" onclick="projectModal.closeModal()">
                    <i class="fas fa-times"></i> Close
                </button>
            `;
        } else {
            actionsHTML = `
                <button class="btn" onclick="window.open('${this.currentProject.demoUrl || '#'}', '_blank')">
                    <i class="fas fa-external-link-alt"></i> View Demo
                </button>
                <button class="btn btn-secondary" onclick="projectModal.closeModal()">
                    <i class="fas fa-times"></i> Close
                </button>
            `;
        }
        
        actionsContainer.innerHTML = actionsHTML;
    }

    formatCategory(category) {
        const categoryMap = {
            'art': 'Generative Art',
            'music': 'AI Music',
            'writing': 'Creative Writing',
            'design': 'AI Design',
            'video': 'Video Demo'
        };
        return categoryMap[category] || category;
    }

    addModalStyles() {
        if (document.getElementById('modal-styles')) return;

        const styles = document.createElement('style');
        styles.id = 'modal-styles';
        styles.textContent = `
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
                background: rgba(0, 0, 0, 0.9);
                backdrop-filter: blur(10px);
            }
            
            .modal-content {
                position: relative;
                background: var(--dark);
                border-radius: 12px;
                max-width: 1000px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                z-index: 2001;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(108, 99, 255, 0.2);
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
                transition: all 0.3s ease;
            }
            
            .modal-close:hover {
                background: var(--primary);
                transform: rotate(90deg);
            }
            
            .modal-header {
                padding: 40px;
                background: var(--dark-light);
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .modal-media {
                margin-bottom: 20px;
            }
            
            .modal-title-section h2 {
                font-size: 2.5rem;
                margin: 10px 0;
                color: var(--primary);
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
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 0.9rem;
                font-weight: 500;
            }
            
            .modal-year {
                background: rgba(33, 150, 243, 0.2);
                color: #2196f3;
            }
            
            .modal-status {
                background: rgba(76, 175, 80, 0.2);
                color: #4caf50;
            }
            
            .modal-type.video {
                background: rgba(255, 87, 34, 0.2);
                color: #ff5722;
            }
            
            .modal-type.image {
                background: rgba(156, 39, 176, 0.2);
                color: #9c27b0;
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
                color: var(--primary);
            }
            
            .modal-description p {
                margin-bottom: 20px;
                color: var(--gray);
                line-height: 1.8;
                font-size: 1.1rem;
            }
            
            .tech-list {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin: 20px 0;
            }
            
            .tech-tag.large {
                padding: 10px 18px;
                background: rgba(108, 99, 255, 0.15);
                border: 1px solid rgba(108, 99, 255, 0.3);
                border-radius: 25px;
                font-size: 0.95rem;
                transition: all 0.3s ease;
            }
            
            .tech-tag.large:hover {
                background: rgba(108, 99, 255, 0.3);
                transform: translateY(-2px);
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
                transition: all 0.3s ease;
                border-left: 3px solid var(--primary);
                color: white;
                text-decoration: none;
            }
            
            .modal-link:hover {
                background: rgba(108, 99, 255, 0.2);
                transform: translateX(5px);
                border-left-color: var(--secondary);
            }
            
            .modal-link i {
                margin-right: 10px;
                width: 20px;
                text-align: center;
            }
            
            .gallery-grid {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
                margin-top: 15px;
            }
            
            .gallery-item {
                border-radius: 8px;
                overflow: hidden;
                cursor: pointer;
                transition: all 0.3s ease;
                height: 100px;
            }
            
            .gallery-item:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            }
            
            .modal-footer {
                padding: 30px 40px;
                background: var(--dark-light);
                border-top: 1px solid rgba(255, 255, 255, 0.1);
            }
            
            .modal-actions {
                display: flex;
                justify-content: flex-end;
                gap: 20px;
            }
            
            @media (max-width: 768px) {
                .modal-body {
                    grid-template-columns: 1fr;
                }
                
                .modal-header {
                    padding: 20px;
                }
                
                .modal-title-section h2 {
                    font-size: 1.8rem;
                }
                
                .modal-body {
                    padding: 20px;
                }
                
                .modal-footer {
                    padding: 20px;
                }
                
                .modal-actions {
                    flex-direction: column;
                }
            }
        `;
        document.head.appendChild(styles);
    }
}

// Create global instance
const projectModal = new ProjectModal();
window.projectModal = projectModal;
console.log('ProjectModal initialized');