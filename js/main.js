const mobile = document.getElementById("fa-bar"); // Hamburger button
const sidebar = document.getElementsByClassName("sidebar")[0]; // Sidebar
const mobileLinks = document.querySelectorAll(".sidebar-menu a"); // Links inside the sidebar

// Toggle the sidebar when hamburger button is clicked
mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");
    sidebar.classList.toggle("active");
});

// Close the sidebar when any link inside the sidebar is clicked (if the screen width is less than 768px)
mobileLinks.forEach(link => {
    link.addEventListener("click", function() {
        if (window.innerWidth <= 768) {
            mobile.classList.remove("is-active");
            sidebar.classList.remove("active");
        }
    });
});

var step = 100;
var stepFilter = 60;
var scrolling = true;

// Correct event handling and scrolling functionality
$(".back").on("click", function(e) {
    e.preventDefault(); // Corrected typo
    $(".hightlight-wrapper").animate({
        scrollLeft: "-=" + step + "px" // Move left (back)
    });
});

$(".next").on("click", function(e) {
    e.preventDefault(); // Corrected typo
    $(".hightlight-wrapper").animate({
        scrollLeft: "+=" + step + "px" // Move right (next)
    });
});
