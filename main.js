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

// 메인 슬라이드
const slides = document.querySelectorAll('.main__slides');
let slideIndex = 0;

let myVar;

showSlides();

function showSlides(){
    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    
    slideIndex++;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = 'block';

    myVar = setTimeout(showSlides, 3000);
}//showSlides

function stopSlide(){
    clearTimeout(myVar);
} //stopSlide

/* ========= */
function currentSlide(num){
    stopSlide();
    slideIndex = num;

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }
    
    slides[slideIndex].style.display = 'block';
}

