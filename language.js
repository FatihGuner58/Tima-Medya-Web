document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');

    languageSelector.addEventListener('click', (event) => {
        const button = event.target;
        if (button.tagName === 'BUTTON') {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
        }
    });

    function changeLanguage(lang) {
        const elements = document.querySelectorAll('[data-tr], [data-en], [data-fr]');
        
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
    }
    document.getElementById('language-selector').addEventListener('change', function() {
        var selectedLanguage = this.value;
        var expires = new Date();
        expires.setTime(expires.getTime() + (30*24*60*60*1000)); // 30 gün geçerlilik süresi
        document.cookie = "language=" + selectedLanguage + "; expires=" + expires.toUTCString() + "; path=/";
        
        // Sayfayı yeniden yükleyin veya yönlendirin
        location.reload();
    });
});