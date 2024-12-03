// Ensure the blur layer matches the sidebar's initial state on page load (mobile only)
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.side-div');
    const blurBackground = document.querySelector('#blur-background');

    // Check if the screen width is mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Apply blur layer logic only on mobile
    if (isMobile) {
        const isSidebarVisible = !sidebar.classList.contains('hide');
        if (isSidebarVisible) {
            blurBackground.style.display = 'block'; // Show blur if sidebar is visible
            blurBackground.setAttribute('data-role', 'sidebar'); // Mark role as sidebar
        } else {
            blurBackground.style.display = 'none'; // Hide blur if sidebar is not visible
        }
    } else {
        blurBackground.style.display = 'none'; // Always hide blur on desktop
    }
});

// Handle burger-icon toggle logic (mobile only)
document.getElementById('burger-icon').addEventListener('click', function () {
    const sidebar = document.querySelector('.side-div');
    const blurBackground = document.querySelector('#blur-background');
    const burgerIcon = document.getElementById('burger-icon');

    // Check if the screen width is mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) {
        return; // Do nothing on desktop
    }

    // Close any open fullscreen cards
    if (typeof closeFullscreen === 'function') {
        closeFullscreen();
    }

    // Toggle sidebar visibility
    const isHidden = sidebar.classList.contains('hide');
    if (isHidden) {
        sidebar.classList.remove('hide');
        sidebar.style.marginLeft = '0';
        blurBackground.style.display = 'block'; // Ensure blur is visible
        blurBackground.setAttribute('data-role', 'sidebar'); // Set role
        burgerIcon.style.marginLeft = '250px';
    } else {
        sidebar.classList.add('hide');
        sidebar.style.marginLeft = '-250px';
        blurBackground.style.display = 'none';
        blurBackground.removeAttribute('data-role'); // Reset role
        burgerIcon.style.marginLeft = '0';
    }
});

// Universal blur-background handler (mobile only)
document.querySelector('#blur-background').addEventListener('click', function () {
    const blurBackground = document.querySelector('#blur-background');

    // Check if the screen width is mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (!isMobile) {
        return; // Do nothing on desktop
    }

    // Determine the role of the blur background
    const role = blurBackground.getAttribute('data-role');

    if (role === 'sidebar') {
        // Handle sidebar closing logic
        const sidebar = document.querySelector('.side-div');
        const burgerIcon = document.getElementById('burger-icon');

        sidebar.classList.add('hide');
        sidebar.style.marginLeft = '-250px';
        blurBackground.style.display = 'none';
        blurBackground.removeAttribute('data-role'); // Reset role
        burgerIcon.style.marginLeft = '0';
    } else {
        // Call the original fullscreen close behavior
        if (typeof closeFullscreen === 'function') {
            closeFullscreen();
        }
    }
});

// Close sidebar when clicking a button inside (mobile only)
document.querySelectorAll('.li-side').forEach(button => {
    button.addEventListener('click', function () {
        const sidebar = document.querySelector('.side-div');
        const blurBackground = document.querySelector('#blur-background');
        const burgerIcon = document.getElementById('burger-icon');

        // Check if the screen width is mobile
        const isMobile = window.matchMedia('(max-width: 768px)').matches;

        if (!isMobile) {
            return; // Do nothing on desktop
        }

        // Hide sidebar
        sidebar.classList.add('hide');
        sidebar.style.marginLeft = '-250px';
        blurBackground.style.display = 'none';
        blurBackground.removeAttribute('data-role'); // Reset role
        burgerIcon.style.marginLeft = '0';
    });
});


// Function to set sidebar z-index based on screen size
function adjustSidebarZIndex() {
    const sidebar = document.querySelector('.side-div');

    // Check if the screen width is mobile
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    // Set z-index dynamically
    sidebar.style.zIndex = isMobile ? '4' : '1';
}

// Run on page load and window resize
document.addEventListener('DOMContentLoaded', adjustSidebarZIndex);
window.addEventListener('resize', adjustSidebarZIndex);