
var originData = [
  {"id": 1,  "title": "Biostatistician I",  "link": "http://technorati.com"},
  {"id": 2,  "title": "Financial Advisor",  "link": "http://4shared.com"},
  {"id": 3,  "title": "Structural Analysis Engineer",  "link": "http://pinterest.com"},
  {"id": 4,  "title": "Senior Developer",  "link": "http://alibaba.com"}, 
  {"id": 5,  "title": "Analog Circuit Design manager",  "link": "https://weibo.com"},
  {"id": 6,  "title": "Analyst Programmer",  "link": "http://utexas.edu"},
  {"id": 7,  "title": "VP Quality Control",  "link": "http://yale.edu"},
  {"id": 8,  "title": "Safety Technician III",  "link": "http://state.tx.us"},
  {"id": 9,  "title": "Marketing Assistant",  "link": "http://shareasale.com"},
  {"id": 10,  "title": "Senior Financial Analyst",  "link": "http://cyberchimps.com"}
];

var textData = JSON.stringify(originData);
var dataList = JSON.parse(textData);



var navigation = document.querySelector('.navigation');
// var navigation = document.getElementsByClassName('navigation')[0];