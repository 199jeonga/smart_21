//b_13_js_constructor_function.js


var UserSetting = function(userName, userAge, userEmail){
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
}

var user1 = new UserSetting('jeonga', 26, 'lja');
console.log(user1);
console.log(user1.name);

var user2 = new UserSetting('puppy', 12);
console.log(user2);

UserSetting.prototype.group = '가족명단체크';




var n = 0;
var addFn = function(){
  this.n=50;
  n++;
}
addFn();
console.log(n);
console.log(window.n);

var ar1 =[1,2,3,4];
Array.prototype.push.call(ar1,'추가할 내용','두번째로 추라할 내용');

console.log(ar1);


var obj = {
  string : 'xido',
  reName : function(){
    console.log('name: ', this.string);
  }
};
obj.reName();

var obj2 = {
  string : 'sub name'
};
console.log(obj2.string);

obj.reName.call(obj2);

// Object.prototype.reName

var listFn = function(){
  return arguments; 
};
// var MakeList = listFn('tt','aa',1,2,3,4);
console.log( listFn('tt','aa',1,2,3,4) );



var btn = document.querySelector('#btn');
btn.addEventListener('click', function(e){
  console.log(this);
})



var Phone = function(brand, product){
  this.brand = brand;
  this.product = product;
};
// var setFn = function(brand, product){
//   set = function(){
//     return this.brand + this.product
//   }
// }


Phone.prototype.set = function(version, year){
  console.log(this.brand, this.product, version, year);
}

var br1 = new Phone('samsung', 'gallaxy'); 
console.log(br1);

br1.set('s21',2021);
br1.set.call(Phone.this, 's21',2021);