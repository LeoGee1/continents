const show = document.querySelector("#miss-nav")
const nav = document.querySelector("#nav")

nav.addEventListener("click", function(e) {
    if(e.target.className === "fa-solid fa-bars") {
        e.target.parentElement.nextElementSibling.style.visibility = 'visible';
    }
})
