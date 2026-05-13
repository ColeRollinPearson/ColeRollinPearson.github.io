document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('tab-toggle');
    const tabBar = document.getElementById('tab-bar');

    toggleButton.addEventListener('click', function() {
        tabBar.classList.toggle('hidden');
    });
});