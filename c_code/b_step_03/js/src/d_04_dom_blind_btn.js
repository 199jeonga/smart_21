//jQuery식! 버튼 클릭하면 슬라이딩으로 디스플레이 처리
/*
(function($){
  //.btn 내부에 있는 버튼을 클릭하여 내용(.content_area)이 나타나거나 사라지게 만들기 !
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

// open2Btn.on('click', function(event){
//   event.preventDefault();
//   contentArea.stop().slideToggle();
// });

})(jQuery);
*/







// js에서는 선택자 별도로 다시 선택해서 사용하여야해요~~

var jsBtn         = document.querySelector('.btn');
var jsCloseBtn    = jsBtn.querySelector('.close'); 
var jsOpenBtn     = jsBtn.querySelector('.open');
var jsOpen2Btn    = jsBtn.querySelector('.open2');
var jsContentArea = document.querySelector('.content_area');

// js를 이용하여 버튼 클릭 시 높이값이 0이 되도록 처리! 높이가 0이면 dp:none;

/*
var originHeight =  getComputedStyle(contentArea).height;

open2Btn.addEventListener('click',function(e){
  e.preventDefault();
  if(getComputedStyle(contentArea).display === 'none'){
    contentArea.style.height = 0;
    contentArea.style.display = 'block';
    getComputedStyle(contentArea).height = originHeight;
  }else{
    getComputedStyle(contentArea).height = 0;
    contentArea.style.display = 'none';
  }
});
*/

var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);
var timed = 500;
var slideH;

// 함수--------------------------------------------------------
var  slideUpFn = function(height){
  var setH = height;
  slideH = setInterval(function(){
    setH -= 1;
    if(setH >= 0){
      jsContentArea.style.height = setH+'px';
    }else{
      clearInterval(slideH);
      // jsContentArea.style = null;
      jsContentArea.style.display = 'none';
    }
  },timed / 100);
}

jsCloseBtn.addEventListener('click', function(e){
  e.preventDefault();
  slideUpFn(conHResult);
})
