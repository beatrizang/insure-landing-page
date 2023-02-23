let nav = document.getElementById('nav');
let btnMenu = document.getElementById('btn__menu');
let btnClose = document.getElementById('btn__close');
let body = document.querySelector("body"); 

document.getElementById('btn__menu').addEventListener('click',()=>{
    nav.style.top = "60px";
    btnMenu.style.display = "none";
    btnClose.style.display = "flex";
    body.style.overflow = "hidden";
});

document.getElementById('btn__close').addEventListener('click', ()=>{
    nav.style.top = "-100vh";
    btnMenu.style.display = "flex";
    btnClose.style.display = "none";
    body.style.overflow = "visible";
});