// d_10. js

var wrapBox = document.querySelector('#wrapBox');
var yearPart = wrapBox.querySelector('ul');
var yeartab_btn = yearPart.querySelectorAll('li');
var yearBtn = '';


var contentPrat = document.querySelector('.content_part');
var contentArea = contentPrat.querySelectorAll('.content_area');
// console.log(contentArea[2]);

var contentList = contentArea.querySelector('.content_list');
var contentListCon = contentList.querySelectorAll('li');
var contentModal = contentArea.querySelector('.content_modal');
var contentModalCon = contentModal.querySelectorAll('div');

var tabIndex = 0;

yeartab_btn.forEach(function(ele, index){
  yearBtn = ele.querySelector('button');
  yearBtn.addEventListener('click', function(e){
    e.preventDefault();
    

    yeartab_btn[tabIndex].classList.remove('on');
    contentArea[tabIndex].classList.remove('on');

    tabIndex = index;
    yeartab_btn[tabIndex].classList.add('on');
    contentArea[tabIndex].classList.add('on');
  })
})
