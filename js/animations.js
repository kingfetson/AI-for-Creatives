// animations.js - Animation-related functionality

// Animate floating shapes
function animateFloatingShapes() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach((shape, index) => {
        // Set initial random positions for shapes that don't have specific positions
        if (!shape.classList.contains('shape-1') && 
            !shape.classList.contains('shape-2') && 
            !shape.classList.contains('shape-3')) {
            const randomTop = Math.random() * 80 + 10; // 10% to 90%
            const randomLeft = Math.random() * 80 + 10; // 10% to 90%
            shape.style.top = `${randomTop}%`;
            shape.style.left = `${randomLeft}%`;
        }
        
        // Add floating animation
        animateShapeFloat(shape, index);
    });
}

// Animate individual shape floating
function animateShapeFloat(shape, index) {
    // Create keyframes for floating animation
    const keyframes = [
        { transform: 'translateY(0px)' },
        { transform: `translateY(${index % 2 === 0 ? '-' : ''}20px)` },
        { transform: 'translateY(0px)' }
    ];
    
    const timing = {
        duration: 3000 + (index * 1000),
        iterations: Infinity,
        direction: 'alternate',
        easing: 'ease-in-out'
    };
    
    shape.animate(keyframes, timing);
}

// Animate elements on scroll
function initScrollAnimations() {
    // Create Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class based on element type
                if (entry.target.classList.contains('project-card')) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                } else if (entry.target.classList.contains('skill-progress')) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = `${width}%`;
                }
                
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Observe skill bars
    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = '0%';
        observer.observe(bar);
    });
    
    // Observe section titles
    document.querySelectorAll('.section-title').forEach(title => {
        observer.observe(title);
    });
}

// Add typing effect to hero text
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero h1');
    if (!heroTitle) return;
    
    const originalText = heroTitle.innerHTML;
    const highlightText = heroTitle.querySelector('.highlight');
    
    if (highlightText) {
        const highlightOriginal = highlightText.textContent;
        highlightText.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < highlightOriginal.length) {
                highlightText.textContent += highlightOriginal.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
    // Start typing after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Add hover effect to project cards
function initProjectCardHover() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.project-img');
            if (img) {
                img.style.transform = 'scale(1.05)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.project-img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });
}

// Initialize all animations
function initAnimations() {
    // Animate floating shapes
    animateFloatingShapes();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Initialize project card hover effects
    initProjectCardHover();
    
    // Add CSS for animation classes
    addAnimationStyles();
}

// Add animation styles dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease forwards;
        }
        
        .animate-fade-in {
            animation: fadeIn 1s ease forwards;
        }
        
        .section-title {
            opacity: 0;
            animation: fadeInUp 0.8s ease forwards;
        }
        
        .hero-content {
            opacity: 0;
            animation: fadeIn 1.2s ease forwards;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);

// Export functions for use in other modules
export { 
    animateFloatingShapes, 
    initScrollAnimations, 
    initTypingEffect,
    initAnimations 
};
