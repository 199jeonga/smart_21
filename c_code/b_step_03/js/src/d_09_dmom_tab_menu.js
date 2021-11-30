var contentBox = document.querySelector('#contentBox');
var titleInner = contentBox.querySelector(".tab_title_inner");
var titleInnerPart = titleInner.querySelector('ul');

// titleList = [].slice.call(titleInnerPart.children);
var titleList = titleInnerPart.children;
var titleArr = [].slice.call(titleList);

var contentInner = contentBox.querySelector('.tab_content_inner');
var contentPart = contentInner.querySelectorAll('.tab_content_part');
var indexCheck = 0;
var optionName = 'on';

var arrFn = function(element){
  element.forEach(function(el, index){
    (index !== indexCheck ) ? el.classList.remove(optionName) : el.classList.add(optionName);
    console.log('!!!!')
  });
}


titleArr.forEach(function(element, index){
  var titleBtn = element.querySelector('button');
  titleBtn.addEventListener('click', function(event){
    event.preventDefault();
    // console.log(this);
    // 방법 1
    /**
     * 
    titleArr[indexCheck].classList.remove(optionName);//현재 인덱스는 0, 그리고 html 상 on이 들어간 부분도 js인덱스는 0
    contentPart[indexCheck].classList.remove(optionName);
    
    
    indexCheck = index;
    titleArr[indexCheck].classList.add(optionName);
    contentPart[indexCheck].classList.add(optionName);
     */

     //방법 2
    /*
    titleArr.forEach(function(el){
      el.classList.remove(optionName);
    })
    contentPart.forEach(function(el){
      el.classList.remove(optionName);
    })

    indexCheck = index;
    titleArr[indexCheck].classList.add(optionName);
    contentPart[indexCheck].classList.add(optionName);
*/

    //방법 3
    indexCheck = index;

    // titleArr.forEach(function(el, index){
    //   (index !== indexCheck ) ? el.classList.remove(optionName) : el.classList.add(optionName);
    // }); //titleArr.forEach
    // contentPart.forEach(function(el, index){
    //   (index !== indexCheck ) ? el.classList.remove(optionName) : el.classList.add(optionName);
    // });
    
    arrFn(titleArr);
    arrFn(contentPart);
    
  });
});

