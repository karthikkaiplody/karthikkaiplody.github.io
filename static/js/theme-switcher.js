document.addEventListener('DOMContentLoaded', () => {
    const themeToggler = document.getElementById('theme-toggler');
    const body = document.body;
    const togglerIcon = themeToggler ? themeToggler.querySelector('i') : null; // Assuming icon is an <i> tag

    if (!themeToggler || !togglerIcon) {
        console.warn('Theme toggler button or icon not found.');
        return;
    }

    // Function to update the icon based on the current theme
    const updateIcon = () => {
        if (body.classList.contains('dark-mode')) {
            togglerIcon.classList.remove('fa-moon');
            togglerIcon.classList.add('fa-sun');
        } else {
            togglerIcon.classList.remove('fa-sun');
            togglerIcon.classList.add('fa-moon');
        }
    };

    // Apply the cached theme on page load
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    } // If it's 'light' or null, it defaults to light mode (no class)
    updateIcon(); // Set the initial icon

    // Add event listener for the theme toggler button
    themeToggler.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateIcon(); // Update the icon after toggling
    });
});
