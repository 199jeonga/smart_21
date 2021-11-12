// b_08_repeat1.js

var i = 0;
while( i < 10 ){
console.log(i);
i++;
}

var y = 0;
for( 0 ; y<20 ; y+=2 ){
	console.log(y);
}

var yy = 2021;
for( ; yy > 1970 ; yy-=1 ){
  console.log(yy+'년');
  document.write(yy+'년');
}


// var yyy = 2021;
// var text = '년';
// var targetY = 2021-50;
// for(; yy >= targetY ; yy-=1){
//   console.log(yy+text);
// }


var date = new Date();
var yyy = date.getFullYear();
var text = '년';
var targetY = 2021-50;
var li;
var ul = document.querySelector('.test');


for(; yyy >= targetY ; yyy-=1){
	li = document.crateElement('li');
	li.innerText - yyy+text;
  ul.append(li);
}