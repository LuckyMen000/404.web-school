document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    function checkScroll() {
        if (window.innerWidth > 768) { // Работает только на экранах больше 768px
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        } else {
            header.classList.remove("scrolled"); // Отключаем на мобильных
        }
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll); // Проверка при изменении экрана
});
