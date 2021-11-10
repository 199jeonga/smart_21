// with 선생님

// step - 1 & 2:  
var i = 0;
var storeHistoryPerVisitor = [];    

//storeHistoryPerVisitor
// [
//   {
//     user: 'a',
//     content: [1, 2, 3, 4, 5]
//   },
//   {
//     user: 'b',
//     content: [1, 2, 3, 4, 5]
//   },
//   {
//     user: 'noNameUser_3',
//     content: [1, 2, 3, 4, 5]
//   },
//   {
//     user: '',
//     content: [1, 2, 3, 4, 5]
//   }
// ];


// step - 1: 
var recordStoreHistoryConcealed = function(visitor) {
  var storeHistory = [];

  var recordStoreHistory = function(visitor) {
  
    // 조건문 -----------------------
    switch(visitor) {
      case 'a':
        recordStoreHistory('start');
        storeHistory.push('3. 카드 결재를 한다 ');
        recordStoreHistory('end');
        break;
      case 'b':
        recordStoreHistory('start');
        storeHistory.push('3. 카드 입금을 받는다 ');
        recordStoreHistory('end');
        break;
      case 'c':
        recordStoreHistory('start');
        storeHistory.push('3. 카드 입금을 받는다 (취소)');
        recordStoreHistory('end');
        break;
      case 'd':
        recordStoreHistory('start');
        storeHistory.push('3. 결제 에러발생');
        recordStoreHistory('end');
        break;                      
      case 'start':
        storeHistory.push('1. 물건을 고른다');
        storeHistory.push('2. 카드를 낸다');
        break;                      
      case 'end':
        storeHistory.push('4. 카드를 돌려받는다');
        storeHistory.push('5. 내역을 확인한다');
        break;                      
      default:
        storeHistory.push('사용 기록 없음.');
    } 
  
  };// recordStoreHistory(visitor);

  recordStoreHistory(visitor);            // 호출을 꼭 하자!! 

  return storeHistory;

};// recordStoreHistoryConcealed(visitor);


// recordStoreHistoryConcealed('a');          
// [
//   '1. 물건을 고른다',
//   '2. 카드를 낸다',
//   '3. 카드 결재를 한다 ',
//   '4. 카드를 돌려받는다',
//   '5. 내역을 확인한다'
// ]





// step - 2: 
// 새로운 기능을 위한 함수를 새로 생성 

var storeFn = function(visitor, user) {     // 값이 missing일 수도 있고, 아닐수도 있는 불안한 값인 user를 매개변수 visitor 보다 뒤에 배치시킨다
  var userCheck = {};                      // e.g. {name: '사용자', content:[]};
  var userSequence = [];                   // 이 아이는 사실상 위의 함수에서 생성된 storeHistory의 값만 저장하는 용도

  userSequence = recordStoreHistoryConcealed(visitor);  

  i += 1;   // i = i + 1;
  userCheck.user = user || 'noNameUser_' + i;
  userCheck.content = userSequence;

  storeHistoryPerVisitor.push(userCheck);

  return userCheck;                        // 옵션! 
};// storeFn(visitor, user);




console.log(storeFn('a'));
console.log(storeFn('b', 'user2'));
console.log(storeFn('c'));
console.log(storeFn('d', 'user4'));
console.log(storeHistoryPerVisitor);