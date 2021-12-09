"use strict";

// d_04_fetch.js

/*
  // 기존 data 불러오기 : XMLHttpRequest()
  // http.open(method, url, async);
  // 버튼 클릭시 관련 자료만 모아서 pre요소에 담기

  // 변수 : 
  const http = new XMLHttpRequest();
  const elBtn = document.querySelector('button');
  const elPre = document.querySelector('pre');

  // 기능/함수
  const dataList = function(){
    http.open('GET', '../data/person_card.json', true);
    http.onreadystatechange = function(){
      const state = http.readyState;
      if( state === XMLHttpRequest.DONE ){ // 요청이 끝나면
        const sta = http.status;
        if( sta >=200 && sta < 400 ){ // 200~399 -> 데이터 전송이 성공하면
          // console.log( http.response);
          // return http.response;
          elPre.innerText = http.response;
        }
      }
    }
    http.send();
  };


  // 이벤트 :
  elBtn.addEventListener('click', function(e){
    e.preventDefault();
    dataList();
    // console.log( getData );
  });

*/
// ----------------------------------------------------
var elBtn = document.querySelector('button');
var elPre = document.querySelector('pre');
var url = "../data/person_card.json";

var fnFetch = function fnFetch(path) {
  fetch(path).then(function (response) {
    return response.json();
  }).then(function (data) {// elPre.innerText = JSON.stringify(data);
  });
};

elBtn.addEventListener('click', function (e) {
  e.preventDefault();
  fnFetch();
});