
var i = 0;
var visitorView = [];


var visitorListConli = function (visitor){

  var visitorHis = [];

  var visitorList = function (visitor){
    switch(visitor){
      case 'a':
        visitorList('start');
        visitorHis.push('3. a-3번차례 어쩌구');
        visitorList('end');
        break;
      case 'b':
        visitorList('start');
        visitorHis.push('3. b-3번차례 어쩌구');
        visitorList('end');
        break;
      case 'c':
        visitorList('start');
        visitorHis.push('3. c-3번차례 어쩌구');
        visitorList('end');
        break;
      case 'd':
        visitorList('start');
        visitorHis.push('3. d-3번차례 어쩌구');
        visitorList('end');
        break;
      case 'start':
        visitorHis.push('1. 1번차례 어쩌구');
        visitorHis.push('2. 2번차례 어쩌구');
        break;
      case 'end':
        visitorHis.push('4. 4번차례 어쩌구');
        visitorHis.push('5. 5번차례 어쩌구');
        break;
        default :
        visitorHis.push('사용기록이 없습니다~!');
      }//switch
  }; //visitorList

  visitorList(visitor);
  return visitorHis;

}; //visitorListConli

var visitorViewCon = function (visitor, user){
  var userCheck = {};
  var userCon = [];

  userCon = visitorListConli(visitor);
  i++;
  
  userCheck.user = user || 'noName__' + i;
  userCheck.list = userCon;

  visitorView.push(userCheck);

};