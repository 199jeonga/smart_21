var n = Math.floor(Math.random()*100) + 1;
var num;

if( n > 0 ){
  if(n < 10){
    num = '00'+ n;
  }else if( n < 100 ){
    num = '0' + n;
  }else{
    num = n;
  }
}else{
  num = '양수로 입력해 주세요.';
}

console.log(num);
