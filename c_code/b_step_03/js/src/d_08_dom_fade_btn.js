
var newBox = document.getElementById('newBox');
var card = document.getElementsByClassName('card');
var modal = document.getElementsByClassName('new_area_modal')[0];
var closeBtnPart = modal.getElementsByClassName('close_btn')[0];
var closeBtn = closeBtnPart.children[0];


//공통함수
var displayFn = function(view){
  var displayCheck = view || false;
  if (!displayCheck){
    modal.style.display = 'block';
    modal.style.opacity = 0;
  }else{
    modal.style = 'null';
    modal.style.display = 'none';
  }
}

// 방법1

var intervalBtn = card[0];

var intervalFn = function(){
  var interval, value = 0;
  interval = setInterval(function(){
    value += 1;
    // if(value <= 100){
    //   modal.style.opacity = value/100;
    // }else{
    //   clearInterval(interval)
    // }
    (value <= 100) ? modal.style.opacity = value/100 :clearInterval(interval);
  },1);
}


// 이벤트 수행
intervalBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  intervalFn();
});



// 방법2
var timeoutBtn = card[1];
var opValue = 0;

var timeoutFn = function(){
  opValue += 1;
  setTimeout(function(){
    modal.style.opacity = opValue +'%';
    if(opValue <= 100){
      timeoutFn();
    }
  },1);
};

timeoutBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  timeoutFn();
});




//방법3
var cssBtn = card[2];

var cssTransitionFn = function(){
  // modal.style.transitionProperty = 'opacity';
  // modal.style.transitionDuration = '500ms';
  // modal.style.trnasitionTimingFunction = 'linear';
  modal.style.transition = 'opacity 3000ms linear';
  setTimeout(function(){
    modal.style.opacity = 1;
  },1000)
}

cssBtn.addEventListener('click', function(e){
  e.preventDefault();
  displayFn();
  cssTransitionFn();
})






// 닫기

var intervalHideFn = function(){
  var style = modal.style;
  var value = style.opacity *100;
  var interval;
  interval = setInterval(() => {
    value--;
    if(value >= 0){
      style.opacity = value/100;
    }else{
      clearInterval(interval);
      displayFn(true);
    }
  }, 1);
}

// var cssCloseHideFn = function(){

// }

closeBtn.addEventListener('click', function(e){
  e.preventDefault();
  intervalHideFn();

});
