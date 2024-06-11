document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.getElementById('load-more');
    const projectEntries = document.querySelectorAll('.project-entry');
    const projectsPerLoad = 3;
    let currentIndex = 0;

    function hideInitialProjects() {
        projectEntries.forEach((entry, index) => {
            if (index >= projectsPerLoad) {
                entry.style.display = 'none';
            }
        });
    }

    function showProjects() {
        for (let i = currentIndex; i < currentIndex + projectsPerLoad; i++) {
            if (projectEntries[i]) {
                projectEntries[i].style.display = 'block';
            }
        }
        currentIndex += projectsPerLoad;

        if (currentIndex >= projectEntries.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    loadMoreButton.addEventListener('click', showProjects);

    // Initially hide projects beyond the first set
    hideInitialProjects();
});
