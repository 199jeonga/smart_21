//b_02_dom_make_nav_01.js

// 메뉴를 클릭하면, navigation영역이 나타나게, 나타나 있으면 사라지게

/*
// 풀어본 예제

var navi_area = document.querySelector('.nav_area');
var navi_btn = navi_area.querySelector('.navi_btn>button');

navi_btn.addEventListener('click', function(event){
  var btnClick ='on';
  event.preventDefault();
  var isAction = navi_area.classList.contains(btnClick);
  (!isAction)?( navi_area.classList.add(btnClick) ):( navi_area.classList.remove(btnClick) );
});



var drop_btn = document.querySelector('.drop_btn>button');
var sub_menu = document.querySelector('.sub_menu');

drop_btn.addEventListener('click',function(event){
 var btnClick = 'on';
 event.preventDefault();
 var isAction = sub_menu.classList.contains(btnClick);
 if(!isAction){
  sub_menu.classList.add(btnClick);
 }else{
  sub_menu.classList.remove(btnClick);
 }
});


*/

// 쌤 풀이

// 변수 영역
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

