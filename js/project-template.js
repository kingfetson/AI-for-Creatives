// project-template.js - Template for adding your own projects
// Copy this structure and paste into the projects array in projects.js

/*
PROJECT TEMPLATE:

{
    id: 16, // Next number after existing projects
    title: "Your Project Name",
    category: "art", // Choose from: 'art', 'music', 'writing', 'design'
    description: "Brief description of your AI creative project. Explain what it does and why it's innovative.",
    image: "https://your-image-url.com/image.jpg", // Use Unsplash or your own images
    tech: ["AI Technology", "Framework", "Language", "Tools"], // List 3-5 technologies
    status: "Active", // Choose from: Active, Beta, Research, Exhibited, Ongoing, Production
    year: "2023",
    featured: true // Set to true for featured projects
}

EXAMPLES BY CATEGORY:

1. AI ART PROJECT:
{
    id: 16,
    title: "AI Painting Assistant",
    category: "art",
    description: "Deep learning model that assists artists by suggesting color palettes and brush strokes.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262",
    tech: ["Deep Learning", "Python", "TensorFlow", "Computer Vision"],
    status: "Active",
    year: "2023",
    featured: false
}

2. AI MUSIC PROJECT:
{
    id: 17,
    title: "Jazz Improvisation AI",
    category: "music",
    description: "AI system that generates jazz improvisations in real-time based on chord progressions.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    tech: ["LSTM", "Music Theory", "Python", "MIDI"],
    status: "Beta",
    year: "2023"
}

3. AI WRITING PROJECT:
{
    id: 18,
    title: "Poetry Generator",
    category: "writing",
    description: "Natural language processing model that creates original poetry in various styles.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
    tech: ["NLP", "Transformers", "Python", "FastAPI"],
    status: "Research",
    year: "2023",
    featured: true
}

4. AI DESIGN PROJECT:
{
    id: 19,
    title: "UI Layout Generator",
    category: "design",
    description: "Machine learning model that suggests optimal UI layouts based on content type.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9",
    tech: ["Machine Learning", "Figma API", "React", "Node.js"],
    status: "Production",
    year: "2023"
}
*/

// Quick insertion function (optional - for advanced users)
function addNewProject(projectData) {
    // Validate required fields
    const required = ['id', 'title', 'category', 'description', 'image', 'tech', 'status', 'year'];
    const missing = required.filter(field => !projectData[field]);
    
    if (missing.length > 0) {
        console.error('Missing required fields:', missing);
        return false;
    }
    
    // Add to projects array
    projects.push(projectData);
    
    // Re-render projects
    renderProjects(projects);
    
    // Update statistics
    updateProjectStatistics();
    
    return true;
}

// Example usage:
/*
addNewProject({
    id: 20,
    title: "My AI Project",
    category: "art",
    description: "My amazing AI creative project",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    tech: ["AI", "JavaScript", "React"],
    status: "Active",
    year: "2023"
});
*/
