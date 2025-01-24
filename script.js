// Function to show the selected section and hide others
function showSection(sectionId) {
    // Get all sections and hide them
    const sections = document.querySelectorAll('.page-section');
    sections.forEach((section) => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

// Set the default section to 'home' when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
});