document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search');
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        searchContainer.style.display = searchContainer.style.display === 'block' ? 'none' : 'block';
        searchInput.focus();
    });

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        
        // Menü öğelerini al
        const menuItems = Array.from(document.querySelectorAll('.menu-list ul li a')).map(link => link.textContent);

        searchResults.innerHTML = '';

        menuItems.forEach(item => {
            if (item.toLowerCase().includes(query)) {
                const li = document.createElement('li');
                li.textContent = item;
                searchResults.appendChild(li);
            }
        });
    });

    // Arama inputunun dışında bir yere tıklanırsa, arama kutusunu kapat
    document.addEventListener('click', function(event) {
        if (!searchContainer.contains(event.target) && !searchButton.contains(event.target)) {
            searchContainer.style.display = 'none';
        }
    });
});