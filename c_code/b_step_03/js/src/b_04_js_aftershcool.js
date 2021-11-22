
// var ul = document.querySelector('.ulList');
// var list = ul.children;

// // var listArr = Array.prototype.slice.call(list);

// var listArr2 = Array.prototype.slice.apply(list);

// console.log(listArr2);

// listArr.forEach(function(data){
//   data.style.border = '1px solid #ddd';
// });


var UserSetting = function(userName, userAge, userEmail){
  this.name = userName;
  this.age = userAge;
  this.email = userEmail;
};

var user1 = new UserSetting('xido', 30, 'xido@gmail.com'); 

UserSetting.prototype.group = '가족 명단 체크';

console.log( user1 );

UserSetting.prototype.true = function(){
  return this.age/2;
}
console.log(user1.true());

var Phone = function(brand, pro){
  this.brand = brand;
  this.product = pro;
};

Phone.prototype.set  = function(add1, add2){
  console.log(this.brand, this.product, add1, add2);
}
var Fn1 = new Phone('갤럭시', '어쩌구');
console.log(Fn1);

Fn1.set.apply (Fn1, ['add1에 대한 내용','add2에 대한 내용']);

var ul = document.querySelector('.ulList');
// var ul = document.getElementsByClassName('ulList');

var UlList = document.querySelector('.list');


var originData = [
  {  "id": 1,  "title": "Research Associate",          "link": "http://time.com" }, 
  {  "id": 2,  "title": "Senior Developer",            "link": "https://blogs.com"}, 
  {  "id": 3,  "title": "VP Quality Control",          "link": "https://xinhuanet.com"}, 
  {  "id": 4,  "title": "Automation Specialist II",    "link": "https://businesswire.com"}, 
  {  "id": 5,  "title": "Geological Engineer",         "link": "https://marriott.com"}, 
  {  "id": 6,  "title": "Account Representative III",  "link": "https://patch.com"}, 
  {  "id": 7,  "title": "Speech Pathologist",          "link": "https://who.int"}, 
  {  "id": 8,  "title": "Automation Specialist IV",    "link": "https://psu.edu"}, 
  {  "id": 9,  "title": "Health Coach I",              "link": "https://cnbc.com"}, 
  {  "id": 10, "title": "Developer I",                 "link": "http://miibeian.gov.cn"}
];


// var i = 0;
// var len = originData.length; // 10개, 그러니까 조건은 10번 반복한다는 뜻
// var makeLi, makeA, findA, title, link;

// for( ; i<len ; i++){
//   makeLi = document.createElement('li'); // 생성
//   makeA = '<a class="link" href=""></a>';
//   makeLi.innerHTML = makeA;
//   findA = makeLi.querySelector('a');

//   title = originData[i].title;
//   link = originData[i].link;
//   findA.href = link;
//   findA.innerText = title;   
//   UlList.append(makeLi);  // 삽입 (생성된 li)
// }



var forFn = function(){
  var makeLi, makeA, findA, title, link;

  makeLi = document.createElement('li'); // 생성
  makeA = '<a class="link" href=""></a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  title = originData[i].title;
  link = originData[i].link;
  findA.href = link;
  findA.innerText = title;   
  UlList.append(makeLi);  // 삽입 (생성된 li)
};

var i = 0;
var len = originData.length; // 10개, 그러니까 조건은 10번 반복한다는 뜻

for( ; i<len ; i++){
  forFn();
}

// originData.forEach(function(data){
//   var makeLi = document.createElement('li');
//   var makeA = '<a class="list" href=""></a>';
//   makeLi.innerHTML = makeA;
//   var findA = makeLi.querySelector('a');
//   findA.href = data.link; 
//   findA.innerText = data.title;
//   UlList.append(makeLi);
// })

  // var forEachFn = function(data){
  //   var makeLi = document.createElement('li');
  //   var makeA = '<a class="list" href=""></a>';
  //   makeLi.innerHTML = makeA;
  //   var findA = makeLi.querySelector('a');
  //   findA.href = data.link; 
  //   findA.innerText = data.title;
  //   UlList.append(makeLi);
  // };

  // originData.forEach(forEachFn);


  console.log($.fn);

  (function($){
    var ul = $('.list');
    originData.forEach(function(data, i){
      ul.append('<li><a class="list htef="'+i+'">'+data+'</a></li>');
    })
  })(jQuery);