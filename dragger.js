const scrollContainer = document.querySelector('.skill-projects');

// Variables to track the state
let isDragging = false;
let startX, scrollStart;

scrollContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX; // Store initial mouse X position
    scrollStart = scrollContainer.scrollLeft; // Store initial scroll position
    scrollContainer.style.cursor = 'grabbing'; // Optional: change cursor
});

scrollContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return; // Only execute if dragging
    const walk = startX - e.pageX; // Calculate distance moved
    scrollContainer.scrollLeft = scrollStart + walk; // Update scroll position
});

scrollContainer.addEventListener('mouseup', () => {
    isDragging = false; // Reset dragging state
    scrollContainer.style.cursor = 'grab'; // Reset cursor
});

scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false; // Reset dragging state if mouse leaves container
});
