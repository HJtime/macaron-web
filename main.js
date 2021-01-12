'use strict'

// 관광명소 슬라이드
const tourWrapper=document.querySelector('.new__wrapper');
const tourSlides=document.querySelectorAll('.new__slides');
const tourSlidez=document.querySelector('.new__slides');
const tourSlide=document.querySelector('.new__slide');
const tourtotal=tourSlides.length;

let tourWidth=tourSlidez.clientWidth;
// let mainWidth=mainWrapper.clientWidth;
let tourSlideIndex=0;


function slidePosition(){
    for(let i=0; i<tourSlides.length; i++){
        tourSlides[i].style.left = `${tourWidth * i}px`;
    }
}

slidePosition();