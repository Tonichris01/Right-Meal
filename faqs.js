// Get all toggle elements
var toggles = document.querySelectorAll('.toggle-Question');

// Loop through each toggle
toggles.forEach(function(toggle) {
    // Get toggle title and content
    var title = toggle.querySelector('.toggle-title');
    var content = toggle.querySelector('.toggle-content');

    // Add click event listener to the title
    title.addEventListener('click', function() {
        // Toggle the display of content
        content.classList.toggle('show');
        title.style.borderBottom = '0';
        content.style.borderTop = '0';
    });
});