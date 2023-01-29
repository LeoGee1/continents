const nav = document.querySelector(".nav");
let show = true
const toggleMenu = (e) => {
    if(e.target.className === 'fa-solid fa-bars') {
        show = !show
        e.target.parentElement.nextElementSibling.style.visibility = 'visible';
    }
    if(show) {
        e.target.parentElement.nextElementSibling.style.visibility = 'hidden';
    }
}
nav.addEventListener('click', toggleMenu);