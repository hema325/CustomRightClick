
const share = document.querySelector(".share");
const shareMenu = document.querySelector(".sub-menu");
const menu = document.querySelector(".menu");

share.addEventListener("click", e => {
    shareMenu.classList.toggle("active");
    if (window.innerWidth - e.clientX < shareMenu.offsetWidth + 20 + menu.offsetWidth) {
        shareMenu.style.right = "calc(100% + 20px)";
        shareMenu.style.left = "revert";
    }
    else {
        shareMenu.style.left = "calc(100% + 20px)"
        shareMenu.style.right = "revert";
    }

});

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    menu.classList.add("active");
    menu.style.top = `${e.clientY}px`;
    menu.style.left = `${e.clientX}px`;
});

window.addEventListener("click", e => {
    if (!e.target.lastElementChild.classList.contains("wrapper") && !e.target.classList.contains("wrapper")) {
        menu.classList.remove("active");
        shareMenu.classList.remove("active");
    }
});
