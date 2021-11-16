var ar1 = ['딸기','포도','바나나','오렌지'];
var copyAr1 = [];

var deepCopyAr1Fx = function(ar1){
  var tmp = [];
  ar1.forEach(function(data, inedx){
    // tmp[index] = data;
    tmp[inedx]  = ar1[index];
  });
  return tmp;
}

var ob1 = {
  'fruits' : ['1','2','3']
}
var cOb1 = {};

ob1['drink']='coffee';
console.log(cOb1);

for( var key in ob1 ){
  cOb1[key] = ob1[key];
}
console.log(cOb1 === ob1);