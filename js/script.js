document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    function checkScroll() {
        if (window.innerWidth > 768) { 
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        } else {
            header.classList.remove("scrolled"); 
        }
    }

    window.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll); 
});
