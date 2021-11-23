


var path = '../data/sample.txt';

(function($){
  $.ajax({
    url:path
  }).done(function(data){
    console.log(data);
  });
})(jQuery);