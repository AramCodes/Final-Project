const header = document.querySelector("header")
const menu = document.querySelector("#menu-icon")
const navlist = document.querySelector(".navmenu")

window.addEventListener("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0)
});

menu.addEventListener('click', openMenu)

function openMenu() {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

window.onscroll = () => {
    menu.classList.remove("bx-x")
    navlist.classList.remove("open")
}