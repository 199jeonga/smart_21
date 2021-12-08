
// var n = 10;
// var nFn = function(data){
//   return console.log( n, data );
// };
// nFn();

// var plus = n + 10;
// nFn(plus);

// var minus = n-5;
// nFn(minus);

// var divide = parseInt(n / 3);
// nFn(divide);

// var multi = n * 6;
// nFn(multi);

// var remainder = n % 3;
// nFn(remainder);

// var nReset = n = n + 10;
// nFn (nReset);

var list = [];

var frontE = function(){
  list = ['1', '2', '3'];
  return list;
};
var backE = function(){
  list = ['4', '5', '6'];
  return list;
};

// var programer = function(){
//   front = ['1', '2', '3'];
//   back = ['4', '5', '6'];
//   return 
// };

()? frontE(): backE();
console.log( list );
