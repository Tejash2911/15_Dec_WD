let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
    if (menu.classList.contains("fa-bars")) {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-times");
    } else {
        menu.classList.remove("fa-times");
        menu.classList.add("fa-bars");
    }
    navbar.classList.toggle("open");
});