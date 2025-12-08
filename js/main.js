// main.js - Main JavaScript functionality
// In main.js, ensure the modal is accessible
function initWebsite() {
    // ... existing code ...
    
    // Make sure project modal is available
    if (typeof projectModal === 'undefined') {
        console.warn('Project modal not initialized. Projects may not open properly.');
    }
    
    // ... rest of your initialization ...
}



// DOM Elements
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const currentYear = document.getElementById('currentYear');
const skillBars = document.querySelectorAll('.skill-progress');

// Initialize the website
function initWebsite() {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Initialize event listeners
    initEventListeners();
    
    // Animate skill bars on page load
    animateSkillBars();
}

// Initialize all event listeners
function initEventListeners() {
    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
    
    // Footer filter links
    initFooterFilterLinks();
}

// Handle header scroll effect
function handleHeaderScroll() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    menuToggle.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
}

// Close mobile menu
function closeMobileMenu() {
    navLinks.classList.remove('active');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    // For this example, we'll just show an alert
    alert(`Thank you, ${name}! Your message about "${subject}" has been sent. I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize footer filter links
function initFooterFilterLinks() {
    document.querySelectorAll('.footer-links a[data-filter]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            
            // Trigger filter button click
            const filterButton = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
            if (filterButton) {
                filterButton.click();
            }
            
            // Scroll to projects section
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate skill bars
function animateSkillBars() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = `${width}%`;
    });
}

// Animate skill bars on scroll
function animateSkillBarsOnScroll() {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        const isInView = bar.getBoundingClientRect().top < window.innerHeight - 50;
        
        if (isInView) {
            bar.style.width = `${width}%`;
        }
    });
}

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', initWebsite);

// Export functions for use in other modules (if needed)
export { 
    initWebsite, 
    handleHeaderScroll, 
    toggleMobileMenu, 
    closeMobileMenu,
    handleContactForm,
    animateSkillBarsOnScroll
};
