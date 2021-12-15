const elslide01 = document.querySelector('.slide_01');

const elViewContent = elslide01.querySelector('.view_content');
const elViewUl = elViewContent.querySelector('ul');
const elLi = elViewUl.children;
const elList = [].slice.call(elLi);

const elbtconstDetail = elslide01.querySelector('.view_btn');
const elnextBnt = elbtconstDetail.querySelector('.next');
const elprevBtn = elbtconstDetail.querySelector('.prev');

let INDEX_CHECK = 0;

const fxNextslide = ()=>{
  elList.forEach( (data)=>{
  });
}