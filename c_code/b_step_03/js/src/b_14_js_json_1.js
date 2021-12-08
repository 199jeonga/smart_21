
var originData = [
  {"id": 1,  "title": "Biostatistician I",  "link": "http://technorati.com"},
  {"id": 2,  "title": "Financial Advisor",  "link": "http://4shared.com"},
  {"id": 3,  "title": "Structural Analysis Engineer",  "link": "http://pinterest.com"},
  {"id": 4,  "title": "Senior Developer",  "link": "http://alibaba.com"}, 
  {"id": 5,  "title": "Analog Circuit Design manager",  "link": "https://weibo.com"},
  {"id": 6,  "title": "Analyst Programmer",  "link": "http://utexas.edu"},
  {"id": 7,  "title": "VP Quality Control",  "link": "http://yale.edu"},
  {"id": 8,  "title": "Safety Technician III",  "link": "http://state.tx.us"},
  {"id": 9,  "title": "Marketing Assistant",  "link": "http://shareasale.com"},
  {"id": 10,  "title": "Senior Financial Analyst",  "link": "http://cyberchimps.com"}
];

var textData = JSON.stringify(originData);
var dataList = JSON.parse(textData);



// var navigation = document.getElementsByClassName('navigation')[0];
var navi = document.querySelector('.navigation');
navi.style = "width:100% height:50px background-color:#dcd";

// var makeUl2 = '<ul class="list></ul>' // 생성하는 방법
// navi.innerHTML = makeUl2;

var makeUl = document.createElement('ul'); //생성하는 방법
makeUl.classList.add('list') //class 이름 할당
navi.append(makeUl);



var UlList = document.querySelector('.list');
// step.1 li요소 하나만 생성하여 삽입
/*  
var makeLi = document.createElement('li');

var title = dataList[0].title;
var link = dataList[0].link;

var makeA = '<a class="link" href="'+ link +'">'+ title +'</a>';
makeLi.innerHTML = makeA;
UlList.append(makeLi);
*/

// step.2 li요소를 ul에 각각 여러개 삽입
/*
var i = 0;
var len = dataList.length; // 10개, 그러니까 조건은 10번 반복한다는 뜻
var makeLi, makeA, findA, title, link;

for( ; i<len ; i++){
  // 생성한다. 생성한 뒤에 삽입을 진행해야 하기 때문에 생성과 삽입 둘 모두 반복문 안에 존재해야 한다.
  makeLi = document.createElement('li'); //var 는 새로 생성이기 때문에 재할당의 의미로 var 제거
  makeA = '<a class="link" href=""></a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');
  
  title = dataList[i].title;
  link = dataList[i].link;
  findA.href = link;
  findA.innerText = title;   
  UlList.append(makeLi);  // 삽입한다. (생성된 li)
}
*/

/**
 * 
 
 var i = 0;
 var len = dataList.length;
 
 var loopFn2 = function(i){
   var makeLi, makeA, findA, title, link;
   
   makeLi = document.createElement('li');
   makeA = '<a class="link" href=""></a>';
   makeLi.innerHTML = makeA;
   findA = makeLi.querySelector('a');
   title = dataList[i].title;
   link = dataList[i].link;
   findA.href = link;
   findA.innerText = title;   
   UlList.append(makeLi); 
  };
  for( ; i<len ; i++){
    loopFn2(i);
  }

  */





// forEach는 함수를 가지고 있기 때문에 내부에 변수 선언 가능. 지역 변수
/* 
dataList.forEach(function(data){
  var makeLi = document.createElement('li');
  var makeA = '<a class="link" href=""></a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  
  findA.href = data.link;
  findA.innerText = data.title;   
  UlList.append(makeLi);  // 삽입한다. (생성된 li)
});
*/

/*
var loopFn = function(data){
  var makeLi = document.createElement('li');
  var makeA = '<a class="link" href=""></a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  
  findA.href = data.link;
  findA.innerText = data.title;   
  UlList.append(makeLi);
}

dataList.forEach(loopFn);
*/



//if, for, forEach 그대로 사용 가능 (forEach 대신 사용가능한 메서드는 jquery에 있음)
// console.log($.fn);
// (function($){
//   // console.log($.fn);
//   var ul = $('.list');
//   dataList.forEach(function(content, index){
//     ul.append('<li><a class="link" href="'+index+'">'+content+'</a></li>'); // jqery - li생성 및 삽입
//   })
// })(jQery);

(function($){
  // console.log($.fn);
  var ul = $('.list');
  dataList.forEach(function(content, index){
    ul.append('<li><a class="link" href=""></a></li>'); // jqery - li생성 및 삽입
    ul.children('li').eq(index).children('a');
    list.text(content.title);
    list.attr(href, content.link);
  })
})(jQery);