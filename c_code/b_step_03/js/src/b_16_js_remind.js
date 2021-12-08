

var arrNumber = [ 90, 5, 30, 60, 350, 250, 3, 60, 8 ];
 // 배열 중 가장 작은 수를 구하는 방법 두가지

//  var arrNumber2Text = JSON.stringify(arrNumber);
//  var arrNumber2 = JSON.parse(arrNumber2Text);
/*
var arrNumber2 = arrNumber.sort();

console.log( arrNumber2 );
var arrNumMin = arrNumber2.unshift();
console.log(arrNumMin);
*/

// Array.prototype.min();
// var minResult = arrNumber.min()



// 배열 중 가장 큰 수를 구하는 값

// var arrNumMax = arrNumber2.pop();



//위 배열에 들어가는 값 대신 정수형의 1~3자리의 랜덤 숫자 열개를 담아 문제 1처럼 도출
/*
var ramdom = [];
var arrNumber3 = Math.floor( Math.random()*1000 );
// var ranlen = arrNumber.length;

var i = 0;
for( ; i >= 10  ; i++){
  ramdom.push(arrNumber3);
}

console.log( ramdom );
*/

/**
 * 
 
 var arrRan = [];
 var random;
 
 for (var i=0 ; i<10; i++){
   random = Math.floor( Math.random()*1000 );
   arrRan.push(random);
  }
  
  console.log(arrRan);
  
  
  */

  /*

  var FirstN = {};
  for(var i = 1; i<9; i++){
    for (var y =1; y<9; y++){
      var gugu = i * y
      FirstN.push(gugu);
    }
  }
  
  console.log(FirstN);
  */


  // for(var i=2;i<10;i++){
  //   for(var n=1;n<10;n++){
  //     console.log( i + 'x' + n + '=' + (i*n) );
  //   }
  // }

  // 이중포문은 안에 있는 걸 먼저 진행한 후에 밖에 있는 포문이 진행된다.
  // 이중포문을 돌릴 때, 변수 선언을 전역 위치에서 할 때 생기는 문제점 :  안에 있는 포문을 돌리고, 조건이 성립되지 않아 안 쪽 포문을 나와 바깥 포문으로 갈 때에 전역에 있으면 이미 변수가 조건이 성립되지 않아 다시 한 번 돌리지 않고 탈출하지만
  //내부에서 선언한 변수라면 값이 재할당된다.

  // var loop = function(i){
  //   for(var n=1;n<10;n++){
  //     // loop(n);
  //     console.log( i + 'x' + n + '=' + (i*n) );
  //   }
  // }

  /**
   * 
   for(i=2;i<10;i+){
     console.log(i+'단 ====================');
     loop(i);
    }
    */

    // loop(i=1);


// setTimeout(function(a){
// for( var a=500;a>250;a--){
//   console.log(a);
// }
// },100);



// var a;
// for(  var a=500 ; a>250 ; a-- ){
//   // console.log(a);
//   setTimeout(function(){
//     console.log(a);
//   },100);

// }//for

var startNum = 500;
var timed = 10;
var endNum = 250;

var intervalFn = setInterval(function(){
console.log(startNum);
startNum -= 1;
if(startNum <= endNum){
  console.log(endNum + '처리 완료');
  clearInterval(intervalFn);
}
},timed);