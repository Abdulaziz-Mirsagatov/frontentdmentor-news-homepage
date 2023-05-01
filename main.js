const menuBtn = document.querySelector(".menu-btn");
const menuCloseBtn = document.querySelector(".menu-close-btn");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
    navbar.classList.remove("closed");
    overlay.style.display = "block";
})

menuCloseBtn.addEventListener("click", () => {
    navbar.classList.add("closed");
    overlay.style.display = "none";
})