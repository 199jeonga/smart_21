//b_10_js_remind_02.js

// console.log(i);
// var y = 1;

var ar1 = ['딸기', '포도', '바나나', '오렌지'];
var cAr = [];

var arFn = function(arr){
  var arEx = [];
  arr.forEach(function(data, index){
    // cAr[index]= ar1[index];
    cAr[index]= data;
    // return cAr; 이렇게 바로 진행해도 되지만
  });
  return arEx;
};
cAr = arFn(ar1);

ar1.push('melon');
console.log(ar1);
console.log(cAr);






console.clear();


/*
var obt = {'a':1, 'b':2};
var cObt = {};
for( var prop in obt ){
  cObt[prop] = obt[prop];
}
obt.c = 3;
console.log(cObt);
*/

var car = ['pcar','ccar','dcar','dcar'];
var car2 = arFn(car);


var ob1 = { 
  'fruits': ['딸기', '포도', '바나나', '오렌지'],
  'drink' : 'coffee'
};
var cOb1 = {};

// for( var prop in ob1 ){
  
//   // if( Array.isArray(ob1) ){
//     if( ob1[prop].constructor === Array ){
//       //ob1의 프로퍼티에 들어있는 배열을 확인하여 copy
//       cOb1[prop].forEach(function(data, index){
//         cOb1[prop] = [];
//         cOb1[prop][index] = data;
//       });
//     }else{
//       //ob1에 대한 객체를 확인하여 deep copy
//       cOb1[prop] = ob1[prop];
//   }
// }

// for( var prop in ob1 ){
//   if( ob1[prop].constructor === Array ){
//     cOb1[prop] = arFn(ob1[prop]);
//   }else{
//         cOb1[prop] = ob1[prop];
//     }
// }




ob1.car = 'niro';
ob1.fruits.push('melon');
console.log(cOb1);



var originAr = {
  'fruits': ['딸기', '포도', '바나나', '오렌지'],
  'drink' : 'coffee',
  'ade' : {'ice':'레몬에이드'}
};
//toString();객체로 처리된 아이들은 문자로 변환이 안됨
var textAr = JSON.stringify(originAr);  //JSON형식을 보이는 그대로 문자화 처리
var copyAr = JSON.parse(textAr);        //강제로 JSON형식(객체/배열)의 형식으로 변환
originAr.more = '추가객체 삽입';
originAr.fruits.push('감');

var copyAr = originAr;                  // 이건 얕은 복사
originAr = 1; // 하지만 다르게 나오는 이유는 값을 복사했기 떄문!

console.log(originAr);
document.write(originAr);           // 객체라서 어차피 안 나옴