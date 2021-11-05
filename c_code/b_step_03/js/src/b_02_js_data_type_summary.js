
console.clear();

/*
*/

var a = '2021년';
var b = '11월';
var c = '04일';
var dot = '. ';
var date;


// function date(){
//   return a+dot+b+dot+c
// }
// console.log ( date() );


var data = function(){
  return parseInt(a)+dot+parseInt(b)+dot+'0'+parseInt(c)
}

/*
date = parseInt(a)+dot+parseInt(b)+dot+'0'+c
var intFn = function(i){
  return parseInt(i);
}
date = iFn(a) + dot + iFn(b) + dot + '0' + iFn(c);

*/
console.log ( data() );

/* 
var user = function(a){
  var arr = ['님 오늘도 고생하셨어요', '님 힘내세요', '내일도 또다시'];
  return a + arr[parseInt(Math.random()*3)];
};

console.log ( 'name'+user );


var ran =  parseInt(Math.random()*3);
console.log(ran);

*/

var content = ['님 힘내세요.', '님 오늘도 고생하셨어요.', '님 내일도 또 다시'];

// content[0] = '님 힘내세요.'
// content[1] = '님 오늘도 고생하셨어요.'
// content[2] = '님 내일도 또 다시'

var userFn = function(data){
  var random = Math.random() * 3;
  var int = parseInt(random);
  var plusText = data + content[int];
  return plusText;
}

var userRel = userFn('me');
console.log( userRel );

var wrap = document.getElementById('wrap');
var p = document.createElement('p');
p.innerText = userRel;
wrap.append(p);


// var sum = function(a, b){
//   return 'a - b = ' +a + b ;
// };
// console.log(sum(1,2));



var sum = function(a, b){
  var result = a + b;
  return 'a + b = '+result;
};

var minus = function(a, b){
  var result = a - b;
  return 'a - b = '+result;
};

var divide = function(a, b){
  var result = a / b;
  return 'a / b = ' + parseInt(result);
};

var svg = function(a, b){
  var result = a * b / 2;
  return 'a * b / 2 = ' + result;
};

var a = 11;
var b = 3;

console.log( sum(a,b) );
console.log( minus(a,b) );
console.log( divide(a,b) );
console.log( svg(a,b) );

