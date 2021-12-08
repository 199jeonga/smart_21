// d_dom_tab_menu2-2

//data 처리  ========================================================================
var eventData = {
  heading:'2021년 이벤트',
  // 제목, 내용(선택), 기간(시작일-종료일), 진행여부(plan, play, stop), 추가 데이터 주소(click ->  modal open), 적용 이미지
eventList:[
  {
    title:'spring event',
    content:'신년 맞이 대축제',
    date:'2021-02-04 - 2021.02.21',
    status:'end',
    morePath:'../data/y21.0201.json',
    bgImg:'../multi/img/event/bg1.png'
  },
  {
    title:'spring event2',
    content:'봄 어쩌구 저쩌구',
    date:'2021-03-04 - 2021.04.21',
    status:'end',
    morePath:'../data/y21.0201.json',
    bgImg:'../multi/img/event/bg2.png'
  },
  {
    title:'summer event',
    content:'신년 맞이 대축제',
    date:'2021-02-04 - 2021.02.21',
    status:'play',
    morePath:'../data/y21.0201.json',
    bgImg:'../multi/img/event/bg3.png'
  }
]
};

// ==================================================================================


// 이벤트 내용을 날짜 기준으로 변경하기 위해 순서 뒤집기
eventData.eventList.reverse();


// 변수  ----------------------------------------------------------------------------
var EVENT_INSERT_CODE  = '<a href data-id>\
                            <h4 class="event_title">제목을 삽입해주세요.</h4>\
                            <p class="event_narration">설명을 삽입해주세요.</p>\
                              <dl class="date"><dt class="blind">기간</dt><dd></dd></dl>\
                              <dl class="event_check"><dt>이벤트 진행</dt><dd></dd></dl>\
                          </a>';

var elEventBox = document.querySelector('#eventBox');
var elContentInner = elEventBox.querySelector('.content_inner');

var yearPartList = eventData.eventList;
var partLen = yearPartList.length;
var i = 0;


// 기능  ----------------------------------------------------------------------------

var mkYearPart = document.createElement('div'); // div 생성
    mkYearPart.setAttribute('class','year_part');   // div에 이름부여(.year_part)
    // mkYearPart.className = 'year_part';          // .year_part 에 이름부여기능 동일
    mkYearPart.innerHTML = '<h3>' + eventData.heading + '</h3>'; // .year_part에 h3생성
var elYearPartH3 = mkYearPart.querySelector('h3'); // h3 선택
var mkEventParticle = document.createElement('ul');// ul 생성
    mkEventParticle.setAttribute('class','event_particle'); // ul에 이름부여 (.event_particle)
    elYearPartH3.after(mkEventParticle); // .event_particle h3뒤에 삽입
    elContentInner.prepend(mkYearPart);  // .year_part 를 삽입    
var elEventParticle = elContentInner.querySelector('.event_particle'); // ul 선택자


// 함수  ----------------------------------------------------------------------------

// var make = function(el, name){
//   var mkEl = document.createElement(el);
//   if(!!name){ mkEl.setAttribute('class', name); }
//   return mkEl;
// };

// li 내부에 설정하는 각각의 내용을 설정하는 함수
// data요소 내부에 들어있는 property :title, content, data, status, morePath, bgImg


var fnFixContent = function(parentElement, data){
var elParent = parentElement;

  var elH4 = elParent.querySelector('.event_title');  
  var elP = elParent.querySelector('.event_narration');
  var elDate = elParent.querySelector('.date >  dd');
  var elEventCh = elParent.querySelector('.event_check');
  var elEventDd = elEventCh.querySelector('dd');  
  var elLink = elParent.querySelector('a');


  elH4.innerText = data.title;
  (!!data.content) ? elP.innerText = data.content : elP.remove();
  elDate.innerText = data.date;



  
  switch(data.status){
    case 'plan':
      elEventCh.classList.add('plan');
      elEventDd.innerText = '준비중';
      break;
    case 'play':
      elEventCh.classList.add('play');
      elEventDd.innerText = '진행';
      break;
    case 'end': 
      elEventCh.classList.add('end');
      elEventDd.innerText = '종료';
      break;
    case 'stop':
    default:
      elEventCh.classList.add('stop');
      elEventDd.innerText = '진행중지';
  } //배열처리 해서 순환 시키면 된다고 함






  // var switchCaseFn = function(caseName, text){
  //   elEventCh.classList.add(caseName);
  //   elEventDd.innerText = text;
  // };

  // var switchFn = function(data){
  //   switch(data){
  //       case 'plan':
  //         switchCaseFn('plan', '준비중');
  //         break;
  //       case 'play':
  //         switchCaseFn('play', '진행');
  //         break;
  //       case 'end': 
  //         switchCaseFn('end', '종료');
  //         break;
  //       case 'stop':
  //       default:
  //         switchCaseFn('stop', '진행중지');
  //     } //배열처리 해서 순환 시키면 된다고 함
  // };
  // switchFn(data.status);




  // switch(data.status){
  //   case 'plan':
  //     elEventCh.classList.add('plan');
  //     elEventDd.innerText = '준비중';
  //     break;
  //   case 'play':
  //     elEventCh.classList.add('play');
  //     elEventDd.innerText = '진행';
  //     break;
  //   case 'end': 
  //     elEventCh.classList.add('end');
  //     elEventDd.innerText = '종료';
  //     break;
  //   case 'stop':
  //   default:
  //     elEventCh.classList.add('stop');
  //     elEventDd.innerText = '진행중지';
  // } //배열처리 해서 순환 시키면 된다고 함

  // morePath
  elLink.setAttribute('data-href', data.morePath);
  elLink.style.backgroundImage = 'url('+ data.bgImg +')';
  elLink.style.backgroundColor = 'transparent';
};


// 이벤트  ----------------------------------------------------------------------------

yearPartList.forEach(function(data, index){
  var mkLi = document.createElement('li');
  mkLi.innerHTML = EVENT_INSERT_CODE;
  elEventParticle.append(mkLi);
  // var mkLi = make('li','box');
  // elEventParicle.append(mkLi);

  fnFixContent(mkLi, data);
})




