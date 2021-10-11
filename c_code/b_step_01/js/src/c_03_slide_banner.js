// c_03_slide_banner.js
/*
var t ='test입니다.';
console.log( );
*/
var next = document.querySelector('.next');
var slideCon = document.querySelector('.slide_con_wrap');
var slideDiv = slideCon.querySelectorAll('div');
// var div = document.querySelector('slide_con_wrap').querySelectorAll('div');
var i = 0;

next.addEventListener('click', function(e){
  e.preventDefault();
  i += 1;
  if(i >= 5){
    i = 0;
  }
  for(var j=0; j<5; j+=1){
    slideDiv[j].classList.remove('action');
  }
  slideDiv[i].classList.add('action');
});