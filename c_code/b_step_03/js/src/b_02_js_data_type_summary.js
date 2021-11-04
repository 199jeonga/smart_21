
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


var user = function(a){
  var arr = ['님 오늘도 고생하셨어요', '님 힘내세요', '내일도 또다시'];
  return arr[parseInt(Math.random()*3)];
};

console.log ( 'name'+user() );