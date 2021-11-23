//b_05_js_import_data_stateCheck.js

// 외부 문서 불러오기

/*
var http = new XMLHttpRequest();
var stateMessage;

http.onreadystatechange = function(){
  switch(http.readyState){
    case XMLHttpRequest.UNSENT:
      stateMessage = '서버와의 데이터 연결 끊어짐'
    break;
    case XMLHttpRequest.OPENED:
      stateMessage = '서버 연결'
    break;
    case XMLHttpRequest.HEADERS_RECEIVED:
      stateMessage = '서버 접근 중, 파일 검색 중'
    break;
    case XMLHttpRequest.LOADING:
      stateMessage = '데이터 불러오는 중'
    break;
    case XMLHttpRequest.DONE:
      stateMessage = '서버와 연결 대기 중'
    break;
  }
  if(http.readyState === XMLHttpRequest.DONE){
    console.log('서버가 이상없이 연결되었음.'); 
  }
}

var method = 'GET';
var url = '../data/person_card.json';
var async = true;

// 요청에 대한 상태를 실시간으로 감지함 하나만 적어도 알아서 감지하기 때문에 한 번만 적어도 된다.
// http.onreadystatechange();
http.open(method, url, async);
http.send();

//------------------------------

// 들어온 자료가 없다면-> undefined 라면 다음 으로 대체해!
var method = method || 'GET'; 
var url = url;
var async = async || true;

linkFn(url, method, async);

// var linkFn = funciton(url, method, async){
//   var http = new XMLHttpRequest();
//   var stateMessage;
//   http.onreadystatechange = function(){
//     switch(http.readyState){
//       case XMLHttpRequest.UNSENT:
//         stateMessage = '서버와의 데이터 연결 끊어짐'
//       break;
//       case XMLHttpRequest.OPENED:
//         stateMessage = '서버 연결'
//       break;
//       case XMLHttpRequest.HEADERS_RECEIVED:
//         stateMessage = '서버 접근 중, 파일 검색 중'
//       break;
//       case XMLHttpRequest.LOADING:
//         stateMessage = '데이터 불러오는 중'
//       break;
//       case XMLHttpRequest.DONE:
//         stateMessage = '서버와 연결 대기 중'
//       break;
//     }
//     if(http.readyState === XMLHttpRequest.DONE){
//       console.log('서버가 이상없이 연결되었음.'); 
//     }
//   }
// };

// setTimeout(function(){
//   console.log(stateMessage);
// },100);


*/

/*
var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/person_card.json', true);
xhr.send();

setTimeout(function(){
  console.log(xhr.onreadystatechange);
  console.log(xhr.readyState);
  console.log(xhr.__proto__);
},100);

*/

/*
fetch('../data/person_card.json').then(function(response){
  console.log(response.json());
})
*/

var xhr = new XMLHttpRequest();
xhr.open('GET', '../data/person_card.json', true);
xhr.send();

setTimeout(function(){
  var data = JSON.parse(xhr.responseText);
  var dataList = [];
  
  var SetFn = function(title, link){
    this.title = title;
    this.url = link;
  }
  data.forEach(function(value, index){
    var title = value.title;
    var url = value.link;
    var obj = new SetFn(title, url);
    dataList.push(obj);
  })
  console.log(dataList[0].title);
},10)
