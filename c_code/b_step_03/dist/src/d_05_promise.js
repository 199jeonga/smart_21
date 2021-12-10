//d_05_promise.js
/*
const fnOne = function(data){
  const rel = data * data;
  return rel;
}

const fnTwo = function(data, fn){
  const rel = data/2;
  fn(rel );
}

const fnThree = function(data, fn){
  const rel = data * 5;
  fn(rel, fnOne);
}

let valueReusult = fnThree(4, fnTwo);
*/

/*
const ko = document.querySelector('#ko');
const en = document.querySelector('#en');
const math = document.querySelector('#math');
const btn = document.querySelector('button');

const dataCalc = (ins)=>{
  const dataResult = new Promise(function(resolve, reject){
    const convertNum = parseInt(ins);
    const permission = isNaN(convertNum);
    (!permission) ? resolve(ins) : reject('점수도출이 되지 않으면 다시 입력하세요.');
  });
  return dataResult;
}

// const fnTest = function(result){
//   dataCalc(result)
//   .then(function(n){return })
// }


btn.addEventListener('click', function(e){
  e.preventDefault();
  const _n = input.value;
  // fnNum(_n);
  console.log(_n);
});

*/

const testBox = document.querySelector('#textBox');
const elKorean = document.querySelector('#korean');
const elEnglish = document.querySelector('#english');
const elMath = document.querySelector('#math');

const btn = testBox.querySelector('button');
const result = testBox.querySelector('.result>span');

//-------------------------------------------------------

const fnRel = function(score){
  const _n = parseInt(score);
  const sendData =   new Promise(function(resolve, reject){
    const nanCheck =  !isNaN(_n);
    (nanCheck)? resolve(_n) : reject('숫자를 정확하게 입력해주세요.') ;
  });
  return sendData;
}
const fnSubject = function(n){
  fnRel(n).then(function(response){
    console.log(response);
  });
  // return 
}


//-------------------------------------------------------


btn.addEventListener('click', function(e){
  e.preventDefault();
  const [kr, en, mt] = [elKorean.value, elEnglish.value, elMath.value];
  fnSubject(kr);
})
