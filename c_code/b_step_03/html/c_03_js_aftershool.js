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

var arr2 = [1,2,4,3,5,6,8,3,5,9,10,20,50,26];
for(var j=0; j<10 ; j++){
	console.log( 'j: '+ j + '-' + arr2[j] );
}

console.clear();


var ar1 = ['딸기','포도','바나나','오렌지'];
var arrResult = [];

var arrFn = function(array){
  var FnArr = [];
  array.forEach(function(data, index){
    FnArr[index] = data;
  })
  return FnArr;
};

var ar2 = arrFn(ar1);

// console.log(ar2 === ar1);

var ob1 = { 
	'fruits': ['딸기','포도','바나나','오렌지'],  
  'drink':'coffee',
  'ade':{ 'ice':'레몬에이드', 'hot':'nothing' }
};
var cOb1 = {};


//if와 외부 함수를 사용한 방법
/*
for(var key in ob1){
  if( Array.isArray( ob1[key] ) ){
    cOb1[key] = arrFn(ob1[key]);
  }else{
    cOb1[key] = ob1[key];
  }
}

console.log(ob1.fruits)
*/

var textArr = JSON.stringify(ob1);
var jsoncopy = JSON.parse(textArr);


jsoncopy.addDrink = '탄산수 먹고싶당';
console.log(jsoncopy);

console.log(jsoncopy === ob1);



var indexCk = ar1.indexOf('바나나');
console.log(indexCk);


// var arr2 = [1,2,4,3,5,6,8,3,5,9,10,20,50,26];
var filterList = arr2.filter(function(d,i,k){ //d만 있으면 된다.
	if(d<4){
		return d;
	}
});

var filterList = arr2.filter(function( data ){ //d만 있으면 된다.
return data < 4;
});

console.log(filterList);