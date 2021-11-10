
var costomerNum = []; //나중에 객체(유저 a~d),컨텐트[1~5])를 만드는데 이 객체를 감싸는 배열이었음. 이걸 밖에서 접근할 수 있도록 어쩌구
var = 0;

var recordStoreHistoryConcealed = function(user, visitor){

  var userStep = [];

  var recordStoreHistory = function(visitor){
    switch(visitor){
      case 'a':
        recordStoreHistory('start');
        userStep.push('3. 카드 결제를한다.');
        recordStoreHistory('end');
        break;
      case 'b':
        recordStoreHistory('start');
        userStep.push('3. 카드 입급을 받는다.');
        recordStoreHistory('end');
        break;
      case 'c':
        recordStoreHistory('start');
        userStep.push('3. 카드 입금을 받는다(취소)');
        recordStoreHistory('end');
        break;
      case 'd':
        recordStoreHistory('start');
        userStep.push('3. 결제 에러발생');
        recordStoreHistory('end');
        break;
        case 'start':
          userStep.push('1. 물건을 고른다.', '2. 카드를 낸다.');
          break;
          case 'end':
            userStep.push('4. 카드 돌려받는다.', '5. 내역을 확인한다.');
            break;

      default:
        userStep.push('사용기록없음');
    } // swithch
    return recordStoreHistory
  }; //recordStoreHistory(visitor);

  recordStoreHistory(visitor);

  return userStep;

}; //recordStoreHistoryConcealed(visitor);

var storeFn = function(visitor, user){
  var userCheck = {};
  var userSequence = [];

  userSequence = recordStoreHistoryConcealed(visitor);
  i += 1;
  userCheck.user = user || 'noName_'+i;
  userCheck.content = userSequence;
  
};

