// hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach((link) => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
});

//faq
const openText = document.querySelectorAll(".openText");
const hiddenText = document.querySelectorAll(".hiddenText");

openText.forEach((button, index) => {
    button.addEventListener("click", () => {
        hiddenText[index].classList.toggle("hide");
        openText[index].classList.toggle("hide");

    })
})