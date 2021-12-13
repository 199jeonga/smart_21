"use strict";

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

var dataUrl = 'https://script.google.com/macros/s/AKfycbwc4tM_ti2SoqTV9QAkbY3YrV2dRIeUvzJ_zCHsrA9488vmV1NaBEejDo5u-P_xPAuv/exec';
fetch(dataUrl).then(function (Response) {
  var data = JSON.perse(Response);
  console.log(data);
});