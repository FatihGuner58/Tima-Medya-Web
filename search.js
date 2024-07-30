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

document.addEventListener('DOMContentLoaded', function () {
    // Arama inputu ve sonuçlar listesi
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    // Aranacak içerikler (örnek olarak)
    const contentItems = [
        { id: 'about', text: 'Biz Kimiz?' },
        { id: 'media-plan', text: 'Medya Planlama' },
        { id: 'performans-pazarlama', text: 'Performans Pazarlama' },
        { id: 'büyük-veri-pazarlama', text: 'Büyük Veri Pazarlaması' },
        { id: 'programatik', text: 'Programatik' },
        { id: 'references-title', text: 'Referanslar' }
    ];

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query.length > 0) {
            const results = contentItems.filter(item => item.text.toLowerCase().includes(query));
            if (results.length > 0) {
                results.forEach(result => {
                    const li = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = `#${result.id}`;
                    link.textContent = result.text;
                    link.addEventListener('click', function() {
                        searchContainer.style.display = 'none'; // Sonuç tıklandığında arama kutusunu kapat
                    });
                    li.appendChild(link);
                    searchResults.appendChild(li);
                });
            } else {
                searchResults.innerHTML = '<li>Arama Bulunamadı...</li>';
            }
        } 
    });
});