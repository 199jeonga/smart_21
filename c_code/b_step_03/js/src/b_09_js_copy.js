// b_09_js_copy.js

// var favoritColor = ['white','green','coral pink','blue','city blue'];
// var copyColor = favoritColor;


// favoritColor.push('yellow');
// console.log(favoritColor, copyColor);


// var favoritColor = ['white','green','coral pink','blue','city blue'];
// var coloneColor = [];
// coloneColor = favoritColor;


// favoritColor.push('sky');
// coloneColor.push('orange');

// favoritColor[4]='sky';
// coloneColor[4]='orange';



// var ColorPick = function(color){
//   if(color === favoritColor ){
//     favoritColor[4]='sky';
//   }else{
//     coloneColor[4]='orange';
//   }
// };


// console.log( ColorPick(favoritColor) );


// var arr = ['one'];
// var arr2 = [];
// // arr2[0] = arr[0];
// arr2.push(arr[0]);
// arr.push('two');


// console.log(arr2);



// var favoritColor = ['white','green','coral pink','blue','city blue'];
// var coloneColor = [];
// coloneColor = favoritColor;


// favoritColor.push('sky');
// coloneColor.push('orange');


var pc = {
  'dell' : '프리시전',
  'hp' : 'z시리즈',
  'apple' : 'macbook',
  'samsung' : 'galaxy book'
};

// var copyPc = pc;
pc.lg = 'gear';
var colnePc = {};

// var i = 0;
// for(i=0; i<5, i++;){
//   if(i <= 4){
//     colnePc.i = 
//   }else{

//   }
// }


// 문제 1: 깊은 복사를 한 뒤, 원하는 제품 하나를 추가하세요.
var cookie = ['초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손'];



var cookie2 = [];
var cookielen = cookie.length;

for(i=0 ; i < cookielen; i++ ){
  cookie2[i]=cookie[i]
};
cookie.push('쿠키원에 넣을 것')
cookie2.push('쿠키투에 넣을 것')

console.log(cookie, cookie2);

//==========================================================

var snack= {'농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도'};

var snack2 = {};
for(var y in snack){
  snack2[y] = snack[y];
}

snack['스낵원에 넣을래'] = 'snack1임';
snack2['스낵투에 넣을래'] = 'snack2임';

console.log(snack, snack2)



//==========================================================
var ice = [{'롯데': ['폴라포', '수박바']}, {'해태': '브라보'}, {'허쉬': '민트초코'}, {'빙그레': '투게더'}];

var ice2 = [];
// var icelen = ice.length;
var iceCon = {};


// if( e < ice.length ){
  for( e = 0 ; e < ice.length ; e++){
    ice2[e]=ice[e];
  }
// }else{
  ice['ice22Add'] = 'ice2에 넣는 값';
// }
// ice.push(ice[e]);
// ice[e]=ice['ice1 프로퍼티']='ice1에 넣는 값';
// ice2.push('iceCon');

console.log(ice);
console.log(ice2);