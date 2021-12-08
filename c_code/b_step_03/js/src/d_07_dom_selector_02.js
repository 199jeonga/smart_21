//sub nav> a 말고, main_nav>a 만 선택하게 하기

var conBox = document.querySelector('#conBox');
var conNav = conBox.querySelector('.con_nav');
var conChildLi = conNav.children;

// var conFirstLink = conChildLi.children; //undefined

// var conFirstLink = [];
// for(var i=0; i<conChildLi.length;i++){
//   conChildLi[i] = conChildLi[i].children;
// }

// console.log(conFirstLink); //모양이 이상해서 실행해봄
// conFirstLink.addEventLister('click', function(){
  
// })
// 안 됨!

//li의 자식에 접근하기 위해서는 html Collection 처리된 요소는 배열로 보이나 배열이 아닌 유사배열이다.

// var convertConLi = Array.prototype.slice.call(conChildLi);
// console.log(convertConLi);

// var filterCheck = Array.prototype.filter.call(function(data){
//   return data;
// });

var conLiSam = Array.prototype.slice.apply(conChildLi);
var conLiFlink = [];

conLiSam.forEach(function(selector){
  conLiFlink.push(selector.children[0]);
})
console.log(conLiFlink);