/*
(function($){
var btn         = $('.btn');
var closeBtn    = btn.children('.close'); 
var openBtn     = btn.children('.open');
var open2Btn    = btn.children('.open2');
var contentArea = $('.content_area');

  closeBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideUp();
  })
  openBtn.on('click', function(event){
    event.preventDefault();
    contentArea.slideDown();
  })


})(jQuery);
*/

var btn         = document.querySelector('.btn');
var closeBtn    = btn.querySelector('.close'); 
var openBtn     = btn.querySelector('.open');
var open2Btn    = btn.querySelector('.open2');
var contentArea = document.querySelector('.content_area');

// var heightStrInCss  = getComputedStyle(contentArea).height;
// var heightNumInCss = parseInt(heightStrInCss);
var heightNumInCss = contentArea.clientHeight;




// slide Up
var slideUp = function(){

}

// closeBtn.addEventListener('click',function(e){
//   e.preventDefault();

// });


// openBtn.addEventListener('click',function(e){
//   e.preventDefault();


// });

// open2Btn.addEventListener('click',function(e){
//   e.preventDefault();


// });

