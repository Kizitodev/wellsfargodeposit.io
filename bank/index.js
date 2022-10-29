// let payNotify = document.querySelector(".pay-notfy")
// console.log(payNotify)

// payNotify.addEventListener("click",function(){
//     alert("Payment is blocked, make payment ")
// })
// NAV BAR
let hamburger = document.querySelector(".hamburger");
let navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', mobileMenu);
function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

let navLink = document.querySelectorAll(".nav-link")
navLink.forEach(n => n.addEventListener('click', closeMenu))
function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active")
}