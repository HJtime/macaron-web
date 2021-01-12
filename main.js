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

    myVar = setTimeout(showSlides, 2500);
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

// 신메뉴 슬라이드
const newWrapper=document.querySelector('.new__wrapper');
const newSlides=document.querySelectorAll('.new__slides');
const newSlidez=document.querySelector('.new__slides');
const newSlide=document.querySelector('.new__slide');
const newtotal=newSlides.length;

let newWidth=newSlidez.clientWidth;
let newSlideIndex=0;


function slidePosition(){
    for(let i=0; i<newSlides.length; i++){
        newSlides[i].style.left = `${(newWidth * i)}px`;
    }
}

slidePosition();

newSlide.style.width=newWidth*newtotal+'px';

function newShowSlides(n) {
    newSlideIndex = n;
    if (newSlideIndex == -1) {
        newSlideIndex = newtotal - 1;
    } else if (newSlideIndex === newtotal) {
        newSlideIndex = 0;
    }
    newSlide.style.left = -(newWidth * newSlideIndex) + 'px';
}

function plusSlides(n){
    newShowSlides(newSlideIndex += n);
}

function currentSlide(n) {
    newShowSlides(newSlideIndex = n);
}

const nextBtn = document.querySelector('.new__controls .next');
const prevBtn = document.querySelector('.new__controls .prev');

nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

