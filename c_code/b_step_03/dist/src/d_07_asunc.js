// /d_07_asunc

const fnTest  = () => {
  return 'test';
}
console.log(fnTest());

const fnPromi = () =>{
  return new Promise( (resolve, reject) => {
    resolve('test');
  })
}
console.log(fnPromi());