const elSlide_01 = document.querySelector('.slide_01');

const elBtnDetail = elSlide_01.querySelector('.view_btn');
const elNext = elBtnDetail.querySelector('.next');
const elPrev = elBtnDetail.querySelector('.prev');

const elViewContent = elSlide_01.querySelector('.view_content');
const elViewConUl = elViewContent.querySelector('ul');
const elViewAddv = elViewConUl.querySelectorAll('li');

const elIndicatorDetail = elSlide_01.querySelector('.indicator ul');
const elIndiLi = elIndicatorDetail.children;
const elIndiList = Array.prototype.slice.call(elIndiLi);

// elAddLen
const addLen = elViewAddv.length;
const OPTION_CLASSNAME = 'on';
let checkIndex = 0;

// ----------------------------------------
// 전체 갯수 중 선택한 순번을 제외한 나머지 형제를 선택
const fnSiblings = (select, idx = checkIndex) => {
  const otherArr = [];
  select.forEach((element, index)=>{
    //let check = element.classList.contains(OPTION_CLASSNAME);
    // if(!check){ otherArr.push(element) }
    if(idx !== index){ otherArr.push(element) }
  })
  return otherArr;
};


// 다음버튼클릭시 1씩 카운트업하면서, 선택순번이 아닌경우 on빼라
const fnAddCountType2 = () => {
  (checkIndex < addLen -1) ? checkIndex += 1 : checkIndex = 0;
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
  fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
    el.classList.remove(OPTION_CLASSNAME);
  });
};
const fnRemoveCountType2 = () => {
  (checkIndex > 0) ? checkIndex -= 1 : checkIndex = addLen -1;
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
  fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
    el.classList.remove(OPTION_CLASSNAME);
  });
};

// 인디케이터
const fnIndexCountType2 = () => {
  elViewAddv[checkIndex].classList.add(OPTION_CLASSNAME);
  fnSiblings(elViewAddv, checkIndex).forEach( (el) => {
    el.classList.remove(OPTION_CLASSNAME);
  });
}


// 이벤트 ++
// 다음버튼 클릭
elNext.addEventListener('click', (e) => {
  e.preventDefault();
  fnAddCountType2();
});

// 이전버튼 클릭
elPrev.addEventListener('click', (e) => {
  e.preventDefault();
  fnRemoveCountType2();
});

// indicator 클릭하여 순서 파악
elIndiList.forEach( (element, index) => {
  let link = element.querySelector('a');
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log( index );
    checkIndex = index;
    fnIndexCountType2();
  });
});
