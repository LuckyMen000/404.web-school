document.addEventListener("DOMContentLoaded", () => {
    const openModalBtn = document.querySelector(".open-modal");
    const modal = document.getElementById("modal");
    const closeModalBtn = document.querySelector(".close");

    // Открытие модального окна с анимацией
    openModalBtn.addEventListener("click", () => {
        modal.classList.add("show");
    });

    // Закрытие модального окна с анимацией
    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // Закрытие при клике вне окна
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const bannerText = document.getElementById("banner-text");

    const messages = [
        "Успей принять участие в конкурсе!",
        "И выиграй 70% скидку на любой курс!!!",
        "Изучи Веб-разработку и стань востребованным специалистом",
        "Старт курса 2 июня 12:00:00",
    ];

    let index = 0;

    function changeBannerText() {
        bannerText.style.opacity = "0"; // Исчезновение текста
        setTimeout(() => {
            index = (index + 1) % messages.length; // Переход к следующему сообщению
            bannerText.textContent = messages[index];
            bannerText.style.opacity = "1"; // Плавное появление текста
        }, 1000); // Время совпадает с CSS-анимацией (1 секунда)
    }

    setInterval(changeBannerText, 7000); // Менять текст каждые 7 секунд
});



document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const courseDetails = document.querySelectorAll(".course-details");

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Удаляем активные классы у всех
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            courseDetails.forEach((detail) => detail.classList.remove("active"));

            // Активируем нужный курс
            button.classList.add("active");
            document.getElementById(button.getAttribute("data-course")).classList.add("active");
        });
    });
});
