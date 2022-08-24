// const menu = document.querySelector(".menu");
// const openMenuBtn= document.querySelector(".open-menu");
// const closeMenuBtn = document.querySelector(".close-menu");


// function toggleMenu(){
//     menu.classList.toggle("menu_opened");
//     menu.classList.toggle("mobile");
// }

// openMenuBtn.addEventListener("click", toggleMenu);
// closeMenuBtn.addEventListener("click", toggleMenu);
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle("menu_opened");
    menu.classList.toggle("mobile");
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})
