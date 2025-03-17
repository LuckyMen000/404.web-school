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
