var jsBtn         = document.querySelector('.btn');
var jsCloseBtn    = jsBtn.querySelector('.close');
var jsOpenBtn     = jsBtn.querySelector('.open');
var jsToggleBtn    = jsBtn.querySelector('.open2');
var jsContentArea = document.querySelector('.content_area');
// -----------------------------------------------
var conH = getComputedStyle(jsContentArea).height;
var conHResult = parseInt(conH);

var timed = 500;
var slideH;
var permission = true;


var slideUpFn = function(conHResult){
  var slideState = getComputedStyle(jsContentArea).display === 'block';
  if(permission && slideState){
    permission = false;
    var sH = conHResult;
    slideH = setInterval(function(){
      sH--;
      if(sH >= 0){
        jsContentArea.style.height = sH+'px';
      }else{
        clearInterval(slideH);
        jsContentArea.style = null;
        jsContentArea.style.display = 'none';
        permission = true;
      }
    },timed/100);
  }
};

jsCloseBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideUpFn(conHResult);  
});


jsOpenBtn.addEventListener('click', function(event){
  event.preventDefault();
  slideDownFn(conHResult);
});
