// Define available courses with their URLs
const courses = [
    { name: "Data Science", url: "/datascience/datascience.html" },
    { name: "IT Certifications", url: "/itcerti/itcertification.html" },
    { name: "Leadership", url: "/leadership/leadership.html" },
    { name: "Web Development", url: "/web dev/webdevelopment.html" },
    { name: "Communication", url: "/communication/communication.html" }
];

// Search Bar Functionality
document.getElementById('searchIcon').addEventListener('click', () => {
    const searchBar = document.getElementById('searchBar');
    const query = searchBar.value.trim().toLowerCase();

    if (query) {
        // Find the matching course
        const matchedCourse = courses.find(course => 
            course.name.toLowerCase().includes(query)
        );

        if (matchedCourse) {
            alert(`Redirecting to: ${matchedCourse.name}`);
            // Redirect to the course page
            window.location.href = matchedCourse.url;
        } else {
            alert("No matching courses found. Please try another search.");
        }
    } else {
        alert('Please enter a search query!');
    }
});

// Optional: Trigger search on Enter key press
document.getElementById('searchBar').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('searchIcon').click(); // Trigger search button click
    }
});

 // Get the current year
 const currentYear = new Date().getFullYear();

 // Set the current year in the span with id "currentYear"
 document.getElementById('currentYear').textContent = currentYear;