var i = 0;
var storeHistoryPerVisitor = [];

var recordStoreHistoryCon = function (visitor){

  var storeHistory = [];

  var recordStoreHistory = function (visitor){
    
    switch(visitor){
      case 'a':
        recordStoreHistory('start');
        storeHistory.push('3. 카드 결제를 한다.');
        recordStoreHistory('end');
        break;
      case 'b':
        recordStoreHistory('start');
        storeHistory.push('3. 카드입금을 받는다.');
        recordStoreHistory('end');
        break;
      case 'c':
        recordStoreHistory('start');
        storeHistory.push('3.카드 취소를 한다.');
        recordStoreHistory('end');
        break;
      case 'd':
        recordStoreHistory('start');
        storeHistory.push('3.결제 에러 발생');
        recordStoreHistory('end');
        break;
      case 'start':
        storeHistory.push('1.물건을 고른다.','2.카드를 꺼낸다.');
        break;
      case 'end':
        storeHistory.push('1.카드를 돌려받는다.', '내역을 확인한다.');
        break;
      default:
    } //switch
  };
  recordStoreHistory(visitor);
  return storeHistory;
};

var storeFn = function(visitor, user) {
  var userCheck = {};
  var userSequence = [];

  userSequence = recordStoreHistoryCon(visitor);

  i += 1;
  userCheck.user = user || 'noName_' + i;
  userCheck.content = userSequence;

  storeHistoryPerVisitor.push(userCheck);
  return userCheck;
};

console.log(storeFn('a'));
console.log(storeFn('b', 'user2'));
console.log(storeFn('c'));
console.log(storeFn('d', 'user4'));
console.log(storeHistoryPerVisitor);