let nav = document.getElementById('nav');
let btnMenu = document.getElementById('btn__menu');
let btnClose = document.getElementById('btn__close');

document.getElementById('btn__menu').addEventListener('click',()=>{
    nav.style.top = "50px";
    btnMenu.style.display = "none";
    btnClose.style.display = "flex";
});

document.getElementById('btn__close').addEventListener('click', ()=>{
    nav.style.top = "-100vh";
    btnMenu.style.display = "flex";
    btnClose.style.display = "none";
});