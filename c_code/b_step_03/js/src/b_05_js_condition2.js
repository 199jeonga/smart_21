// b_05_js_condition2.js

var inputBox = document.querySelector('#inputBox');
var par = document.querySelector('p');
var narr;

var keyFn = function (data){
  switch(data){
    case '1' :
      narr = '숫자 1을 입력했습니다.';
      break;
    case 'space' :
      narr = '스페이스를 입력했습니다.';
      break;
    default :
      narr = '다른글자 입력';
  }
};

inputBox.addEventListener('keyup', function(event){
  keyFn(event.key);
  par.innerText = narr;
});


//-----------------------------------------------
// 변수
var selectFood =document.querySelector('#selectFood'); //document.getElementById('#selectFood');  ID는 한개만 사용가능하기 때문에 t로 끝남
var btn1 = document.querySelector('.btn1');              //document.getElementsByClassName('btn')[0]; class는 중복 사용가능하기 때문에 s로 끝남, 이거 구형은 안 된다고함 구형은 또 다른 명령어!
var food = document.querySelector('.food');             //document.getElementsByClassName('food')[0];


//함수
var switchTest2 = function(food){
  var selectFood;
  switch(food){
    case 'noodle':
      selectFood='면을 좋아하는~';
      break;
    case 'meat':
      selectFood='소고기';
      break;
    case 'rice':
      selectFood='한국쌀';
      break;
    default:
      selectFood='편식 노노';
  }
};

//이벤트
//btn1을 이벤트 발생(클릭, 수행 => selctFood의 값을 가져와서 결과를 food에 도출)

btn1.addEventListener('click', function (e){
  e.preventDefault(); //기본기능 삭제
  // console.log(selectFood.value);
  var rel = selectFood.value;
  var returnValue = switchTest2(rel);
  food.innerText = returnValue;
});