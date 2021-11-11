
// var rel = !true;
// if (rel){
//   console.log('참입니다.');
// } else {
//   console.log('거짓입니다.');
// }

// var count = 10;
// if(count <= 5){
//   console.log('숫자는 5 이하입니다.');
// }else if(count > 10){
//   console.log('숫자는 10보다 크다.');
// }else{
//   console.log('숫자는 5보다 크고 10보다 작거나 같은 수')
// }



var count = 5;
if(count < 10){
  console.log('00'+count);
}else if(count < 100){
  console.log('0'+count);
}else{
  console.log(count);
}


var nn = '000000'+count;
var cut = nn.slice(-3);
var num2 = cut;
console.log(num2);


console.clear();

// 중첩함수 

var a = function(n){
  var b = function(i){
    var c = function(j){
      var r = j * j;
      return = r;
    }//c
    var r2 = c(i)/2;
    return r2;
  }//b
  var r3 = b(n);
  return r3;
};

console.log(a(4));


// 클로저

var aFn = function(n){
  return(function(i){
    return(function(j){
      var r = j * j;
      return r;
    })(i) / 2;
  })(n) + 5;
};

console.log(a(4));