const menuIcon = document.querySelector('.menu-icon');
const dropdown = document.querySelector('.dropdown');
const progressBar = document.getElementById('myProgressBar');

// Function to toggle the visibility of the dropdown
function toggleDropdown() {
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function updateProgressBar() {                                                                                  // Function to update the progress bar
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;                              // Get the current scroll position
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;           // Get the total height of the page
    var scrolled = (scrollTop / scrollHeight) * 100;                                                            // Calculate the percentage scrolled
    progressBar.style.width = scrolled + "%";                                                                   // Update the width of the progress bar
}

function updateContainerSizes() {
    const contentContainer = document.querySelector(".content-container");

    // Get current dimensions
    const contentRect = contentContainer.getBoundingClientRect();

    // Format as "width x height"
    const contentSizeText = `${Math.round(contentRect.width)}px x ${Math.round(contentRect.height)}px`;

    // Display values inside the containers (or in a separate element)
    document.getElementById("size-display-content").textContent = contentSizeText;
}

// Event listener for the menu icon click
menuIcon.addEventListener('click', function (event) {
    toggleDropdown();
    event.stopPropagation(); // Prevent the event from propagating to the document
});

// Event listener for clicking anywhere on the document to close the dropdown
document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target) && event.target !== menuIcon) {
        dropdown.style.display = 'none'; // Close the dropdown if clicked outside
    }
});

window.onscroll = function () {
    const progressBar = document.getElementById("myProgressBar");

    if (progressBar) {
        console.log("ScrollTop:", scrollTop);
        console.log("ScrollHeight:", scrollHeight);
        console.log("Scrolled %:", scrolled);
        
        updateProgressBar();
    } else {
        console.error("Progress bar with ID 'myProgressBar' not found on this page.");
    }
};

// Run on page load and when the window resizes
window.addEventListener("load", updateContainerSizes);
window.addEventListener("resize", updateContainerSizes);
