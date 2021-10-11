(function($){
// console.log($.fn);
var nt = $('.next');
var slideWrap = $('.slide_con_wrap');
var div = slideWrap.children('div');
var i = 0; // js는 0이 첫번째다.

// 버튼을 클릭할 때마다 div의 i번째 내용이 나타나게 해!
// nt .on('click') < 최근에 바뀐 기능 이벤트를 on에 담자
nt.click(function(){
  i += 1;
  if(i >= 5){ i = 0;}

  div.hide();
  div.eq(i).show();
});
})(jQuery);