"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

//d_05_promise.js

/*
const fnOne = function(data){
  const rel = data * data;
  return rel;
}

const fnTwo = function(data, fn){
  const rel = data/2;
  fn(rel );
}

const fnThree = function(data, fn){
  const rel = data * 5;
  fn(rel, fnOne);
}

let valueReusult = fnThree(4, fnTwo);
*/

/*
const ko = document.querySelector('#ko');
const en = document.querySelector('#en');
const math = document.querySelector('#math');
const btn = document.querySelector('button');

const dataCalc = (ins)=>{
  const dataResult = new Promise(function(resolve, reject){
    const convertNum = parseInt(ins);
    const permission = isNaN(convertNum);
    (!permission) ? resolve(ins) : reject('점수도출이 되지 않으면 다시 입력하세요.');
  });
  return dataResult;
}

// const fnTest = function(result){
//   dataCalc(result)
//   .then(function(n){return })
// }


btn.addEventListener('click', function(e){
  e.preventDefault();
  const _n = input.value;
  // fnNum(_n);
  console.log(_n);
});

*/
var testBox = document.querySelector('#textBox');
var elKorean = document.querySelector('#korean');
var elEnglish = document.querySelector('#english');
var elMath = document.querySelector('#math');
var btn = testBox.querySelector('button');
var result = testBox.querySelector('.result>span'); //-------------------------------------------------------

var fnRel = function fnRel(score) {
  var _n = parseInt(score);

  var sendData = new Promise(function (resolve, reject) {
    var nanCheck = !isNaN(_n);
    nanCheck ? resolve(_n) : reject('숫자를 정확하게 입력해주세요.');
  });
  return sendData;
};

var fnSubject = function fnSubject(n) {
  fnRel(n).then(function (response) {
    console.log(response);
  }); // return 
}; //-------------------------------------------------------


btn.addEventListener('click', function (e) {
  e.preventDefault();
  var _ref = [elKorean.value, elEnglish.value, elMath.value],
      kr = _ref[0],
      en = _ref[1],
      mt = _ref[2];
  fnSubject(kr);
});