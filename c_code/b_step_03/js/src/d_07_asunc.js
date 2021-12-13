"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

// /d_07_asunc
var fnTest = function fnTest() {
  return 'test';
};

console.log(fnTest());

var fnPromi = function fnPromi() {
  return new Promise(function (resolve, reject) {
    resolve('test');
  });
};

console.log(fnPromi());