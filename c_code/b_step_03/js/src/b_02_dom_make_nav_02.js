var navArea = document.querySelector('.nav_area');
var naviBtnSelector = document.querySelector('.navi_btn');
var navBtn = naviBtnSelector.querySelector('button');
var navOn='on'

// 이벤트 영역
/*
// 토글을 사용한 방법
navBtn.addEventListener('click', function(event){
  event.preventDefault();
  navArea.classList.toggle('on');
})
*/

navBtn.addEventListener('click', function(event){
  event.preventDefault();
  var checkClassName = navArea.classList.contains(navOn);
  if(checkClassName){
    navArea.classList.remove(navOn);
  }else{
    navArea.classList.add(navOn);
  }
})

// 다시 풀어봄
/**

var mainMenu = document.querySelector('.nav_area');
var dropBtn = mainMenu.querySelector('.drop_btn button');
var subMenu = mainMenu.querySelector('.sub_menu');



dropBtn.addEventListener('click', function(event){
  event.perventDefault();
  btnContains = subMenu.classList.contains(dropBtn);
  
  (btnContains)?(subMenu.classList.remove('on')):(subMenu.classList.add('on'));
})
  */

var dropBtnSelector = document.querySelector('.drop_btn');
var dropBtn = dropBtnSelector.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var displayStateFn = function(selector){
  // 선택자의 display 상태값을 가져오는데 기본 html 문서에서 값을 가져오되, 없다면 css 기본값에서 가져와!
  return selector.style.display || getComputedStyle(selector).display;
  /**
   * var displayState;
   * if(!!selector.style.display){
   * displayState = getComputedStyle(selector).display;
   * }else{
   * displayState = selector.style.dispaly;
   * }
   */
}

// console.log(window.getComputedStyle(subMenu).display);
var  subMenuStyle = getComputedStyle(subMenu);
console.log(subMenuStyle.display);  // none

dropBtn.addEventListener('click', function(event){
  event.preventDefault();
  // (subMenuStyle.display === 'none')? subMenu.Style.display="block": subMenu.Style.display="none"; 이건 getComputedStyle에 대한 값만 확인 가능
  var state = displayStateFn(subMenu);
  (state === 'none') ? subMenu.Style.display= 'block' : subMenu.Style.display= 'none';
  // console.log(subMenu.style.display);
})

