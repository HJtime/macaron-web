'use strict'

// navbar 투명도 변경
const navbar=document.querySelector('#navbar');
const navheight=navbar.getBoundingClientRect().height;

window.addEventListener('scroll', () =>{
    const scrolling=window.pageYOffset;

    if(scrolling > navheight){
        navbar.classList.add('navbar__white');
    }else{
        navbar.classList.remove('navbar__white');
    }
});