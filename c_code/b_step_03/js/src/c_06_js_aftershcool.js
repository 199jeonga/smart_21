// 구구단
/*
for(i=2; i<=9 ; i++){
  console.log(i+'단 시작 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
  for(y=1 ; y<=9 ; y++){
    console.log( i + 'x' + y + '=' + (i*y) );
    // console.log(y);
  }
}
*/

// 배열 중 가장 작은 값을 구하는 방법
// var arrNumber = [90, 5, 30, 60, 450, 250, 3, 60, 8];
/*
var minNum = arrNumber[0]

for( var i = 0 ; i<arrNumber.length ; i++){
  if( minNum > arrNumber[i] ){
    minNum = arrNumber[i];
  }
}
console.log(minNum);
*/
/*
var minN = arrNumber[0];
for(var i = 0; i<arrNumber.length; i++){
  if(minN > arrNumber[i]){
    minN = arrNumber[i]
  }
}
console.log(minN);
*/
/*
var sc = arrNumber.sort(function(a,b){  return  a - b; });
console.log(sc[0]);
*/

// 0.1초마다 1씩 줄어들어 500->250 만들기
// 위를 버튼 클릭 시 행동하도록 수정 ->>>> 같이함!-> 문제 생김! 왜 ! undefined 나옴?
/*

var startN = 500;
var endN = 250;
var intervalFn;
var ifTrue = true;

var contentBox = document.querySelector('#contentBox');
var btn = contentBox.querySelector('.btn');
var pSpan = contentBox.querySelector('p > span');
pSpan.innerText = '시작문구 입니다.';

var countFn = function(startN){
  if(ifTrue){
    ifTrue = false;
    intervalFn = setInterval(() => {
      if(startN > endN){
        pSpan.innerText = startN;
        startN--;
      }else{
        pSpan.innerText = endN+'입니다! 끝~~~!';
        clearInterval(intervalFn);
        ifTrue = true;
      }
    }, 10)
  }
}//countFn

btn.addEventListener('click',function(e){
  e.preventDefault();
  countFn(startN);
})


*/

//jQ 이용하여 slide 하기
/*
(function($){
  
  var btn         = $('.btn');
  var closeBtn    = btn.children('.close'); 
  var openBtn     = btn.children('.open');
  var open2Btn    = btn.children('.open2');
  var contentArea = $('.content_area');

closeBtn.on('click',function(e){
e.preventDefault();
contentArea.slideUp();
})
openBtn.on('click',function(e){
  e.preventDefault();
  contentArea.slideDown();
  })
open2Btn.on('click',function(e){
  e.preventDefault();
  contentArea.stop().slideToggle();
})
})(jQuery);
*/


//js를 이용하여 slide하기

var btn = document.querySelector('#content2Box .btn');
var closeBtn = btn.querySelector('.close');
var openBtn = btn.querySelector('.open');
var open2Btn = btn.querySelector('.open2');
var contentArea = document.querySelector('.content_area');

var cssGetHText = getComputedStyle(contentArea).height;
var cssGetH = parseInt(cssGetHText);
var nowH = contentArea.style.height;

// var nowH = 

var setOutFn = function(cssGetH){
  var height = cssGetH
  setInterval(() => {
    height--;
    if(height >= 0){
      contentArea.style.height = height + 'px'; // 왜 이걸 변수로 적용하면 제대로 안 되는 거지?
      // nowH = height + 'px';
    }else{
      clearInterval(setInFn);
      contentArea.style.display = 'none';
    }
  }, 10);
}

closeBtn.addEventListener('click', function(e){
  e.preventDefault();
  setOutFn(cssGetH);
})




// // open

var setInFn = function(nowH){
  var height = nowH
  setInterval(() => {
    height++;
    if(height <= cssGetH){
      contentArea.style.display = 'block';
      contentArea.style.height = height + 'px';
    }else{
      clearInterval(setInFn);
    }
  }, 10);
}

openBtn.addEventListener('click', function(e){
  e.preventDefault();
  setInFn(nowH);
})