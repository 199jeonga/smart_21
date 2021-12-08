
//웹을 통한 자료 요청기술 -> jQ에서는 $ajax 전 작업
var xhr = new XMLHttpRequest();
var method = 'GET';
var url = '../data/sample.txt';
var async = true; // 비동기 승인 여부


xhr.open(method, url, async); // xhr로 자료 요청
// <- 응답처리 내용 보류

xhr.send(); // 자료 요청 후 xhr에게로 전송, 우리 입장에선 요청한 자료 받기

setTimeout(function(){
  console.log(xhr.response); // 그냥 부르면 데이터 로딩이 되지 않아 내용이 확인되지 않는다.
},100); // 원래는 조건문으로 작성해야 하는데 지금은 간략하게 하기 위해! 대충대충 시간 정해서 해봄

