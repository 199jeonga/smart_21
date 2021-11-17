// b_12_function

var message = "별도의 메세지 창을 띄워 확인";
// alert(message);



// var userOld = '나이를 입력하세요.';
// // prompt(userOld);
// var propResult = prompt(userOld);
// if(propResult < 20){
//   location = 'http://naver.com';
// }else{
//   document.write('어서오세요');
// }



// var adultCheck = '당신은 성인인가요?';
// var confirmCheck = confirm(adultCheck);
// (confirmCheck) ? document.write('성인임을 확인했습니다.') : document.write('미성년자임을 확인했습니다.');


//==================================================

// console은 
var arr = ['one', 'two','three','four', 'five'];
var obj = {'a':'one', 'b':'two', 'c':'three'};
console.log('결과 띄워주세요!');
console.table(arr);
console.table(obj);

console.clear();

var sum = eval('5'+'5');
var sum2 = eval('5+5');
console.log(sum);
console.log(sum2);


var bb = '5' / 2;
console.log(bb);

//is가 들어가면 이게 맞는지 아닌지를 묻는 함수가 된다. 

// console.log('글자 등장!');
// setTimeout(function(){
//   console.log('3초 뒤에 등장!')
// }, 3000);


// var i = 0;
// var setI = setInterval(function(){
//   console.log('i:',i);
//   i++;
// }, 500);

// if(i >20){
//   i=0;
// }



//new가 붙으면 함수 형태를 객체로 변환(인스턴스화한다) 사용할 수 있게 한다. 이 자체를 생성자 함수라고 말한다.

var date = new Date();

var year = date.getFullYear();
var month = date.getMonth()+1; //Js에서 1월을 0으로 보기 때문에 정확한 값을 보기 위해서는 +1을 진행해줘야 한다.(month, week)
var day = date.getDate();


console.log( year, month, day);