// Sayfa yüklendiğinde animasyonları başlat
document.addEventListener("DOMContentLoaded", function() {
    animateAboutContent();
});

// Kullanıcı scroll yaptığında animasyonları başlat
window.addEventListener("scroll", function() {
    animateAboutContent();
});

// Animasyonları tetikleyen fonksiyon
function animateAboutContent() {
    var aboutImage = document.querySelector(".about-image1");
    var aboutRight = document.querySelector(".about-right");

    if (isElementInViewport(aboutImage)) {
        aboutImage.classList.add("active");
    }
    if (isElementInViewport(aboutRight)) {
        aboutRight.classList.add("active");
    }
}

// Element viewport içinde mi kontrolü
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.media-plan, .performans-pazarlama, .büyük-veri-pazarlama, .programatik');

    function checkVisibility() {
        const viewportHeight = window.innerHeight;

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            // Eğer element görünürse `visible` sınıfını ekle
            if (elementTop < viewportHeight) {
                element.classList.add('visible');
            }
        });
    }

    // Sayfa yüklendiğinde ve kaydırıldığında kontrol et
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Sayfa ilk yüklendiğinde kontrol et
});
