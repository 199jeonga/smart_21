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

var subMenuStyle = getComputedStyle(subMenu);
// console.log( subMenuStyle.display );


var displayStateFn = function(selector){
  // 선택자의 display 상태값을 가져오는데 기본 html문서에서 값을 가져오되 없다면, css기본값에서 가져오게
    return selector.style.display || getComputedStyle(selector).display;
    /*
    var displayState;
      if(!!selector.style.display){
        displayState = selector.style.display
      }else {
        displayState = getComputedStyle(selector).display;
      }
    */
};

// 이벤트 ----------------------------------------------------
// dropBtn.addEventListener('click', function(event){
//   event.preventDefault();
//   // (subMenuStyle.display === 'none') ? subMenu.style.display = 'block' :  subMenu.style.display = 'none';
//   var state = displayStateFn(subMenu);
//   console.log( state );
//   (state === 'none') ? subMenu.style.display = 'block' :  subMenu.style.display = 'none';
// });




// 11.24 과제 ==============================================

var btnWrap = document.querySelector('.drop_btn');
var btn = btnWrap.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var originhieght = '40px';
var maxheight = '132px';

var eventFn = function(event){
  event.preventDefault();
  if(state === 'none'){
      subMenu.style.display = 'block'
    setTimeout(function(){
    btnWrap.getComputedStyle(height) = maxheight;
  },500);
  }else{
    btnWrap.getComputedStyle(height) = originhieght
    setTimeout(function(){
    subMenu.style.display = 'none'
  },500);
  }
};
btn.addEventListener('click', eventFn );