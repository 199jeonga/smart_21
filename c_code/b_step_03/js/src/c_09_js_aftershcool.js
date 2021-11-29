var jsCloseBtn    = document.querySelector('.close');
var jsOpenBtn     = document.querySelector('.open');

var jsContentArea = document.querySelector('.modal');
// -----------------------------------------------
var conO = getComputedStyle(jsContentArea).opacity;
var conOResult = parseInt(conO);
var timed = 500;
var viewOp;
var permission = true;


// var conNone = function(state){
//   var conViewState = getComputedStyle(jsContentArea).display = 'block';
//   var opacityState = state;
//   slideO = setInterval(function(){
//     permission = false;
//     opacityState -= 0.01;
//     if(permission && conViewState){
//       jsContentArea.style.opacity = opacityState+'px';
//     }else{
//       jsContentArea.style.display = null;
//       clearInterval(slideO);
//       permission = true;
//     }
//   },timed/100);
// }


// jsCloseBtn.addEventListener('click', function(e){
// e.preventDefault();
// conNone(conOResult);
// })

