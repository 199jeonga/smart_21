// c_01_dom_sample_01.js

// 버튼을 클릭하면  메뉴 나타남
// 버튼을 클릭하면  메뉴 사라짐

// 버튼을 클릭하면  메뉴 나타남
/**
 * 버튼 선택자 생성 .navbar_toggler -> var navToggleBtn = document.querySelector('.navbar-toddler');
 * 선택자 클릭  -> navToggleBtn.addEventListener('click', function(클릭했을 때 발생하는 무언가가 적힘 -> event){})
 * 메뉴가 나타난다. id=navbarSupportedContent -> document.querySelector('#navbarSupportedContent');
 * 나타나기(클래스 네임을 추가하여 나타나게 하기) -> class 이름 추가 none -> block
 *  - 기능 수행 전 체크사항 : action 유무 판단-classList.contains(); , 해당 버튼의 고유기능 해제-event.preventDefault();
 */

var ToggleBtn = document.querySelector('.navbar-toddler');
var navbarSupportedContent= document.querySelector('#navbarSupportedContent');


navToggleBtn.addEventListener('click', function(event){
  event.preventDefault(); //
  var checkClassName = 'on';
  // 사전기능 처리 :
  var isAction = navbarSupportedContent.classList.contains(checkClassName);
  //수행
  if(!isAction){
    navbarSupportedContent.classList.add(checkClassName);
  }else{
    navbarSupportedContent.classList.remove(checkClassName);
  }
});


//JQuery로 작성할 때
/*
var ToggleBtn =$('.navbar-toddler');
var navbarSupportedContent= $('#navbarSupportedContent');

navToggleBtn.addEventListener('click', function(event){
  event.preventDefault(); //
  var checkClassName = 'on';
  // 사전기능 처리 :
  var isAction = navbarSupportedContent.hasClass(checkClassName);
  //수행
  if(!isAction){
    navbarSupportedContent.addClass(checkClassName);
  }else{
    navbarSupportedContent.removeClass(checkClassName);
  }
});
*/