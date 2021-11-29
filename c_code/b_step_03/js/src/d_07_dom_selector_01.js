// d_07_dom_selector_01.js

var wrap = document.getElementById('wrap');
// wrap.style.width='90%';
wrap.style = 'width:90%; margin:auto; background-color:#fda';

var headBox = document.querySelector('#headBox');
headBox.style = 'width:100%; height:auto; backgound-color:#adf';
var headH1 = document.querySelector('h1');
headH1.style = 'border-radius:5px; font-size:1.2rem';

// var h1Link = h1.children; // 자식 선택자는 이렇게 한 번만 작성!


var h1Insert = headH1.childNodes; //chlidren이 아닌 childNodes를 선택해봄


var navArea = wrap.getElementsByClassName('nav_area');

var conBox = document.querySelector('#conBox');
var conNav = conBox.querySelector('.con_nav');

// var conNavLink = conNav.querySelector('a');
// var conNavLi = conNav.children;
// var conNavLink = conNavLi[i].children;


