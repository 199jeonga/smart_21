
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


dropBtn.addEventListener('click', function(event){
  event.preventDefault();
  subMenu.style.display = 'block';
})

