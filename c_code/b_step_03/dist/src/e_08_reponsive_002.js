

const elBody = document.querySelector('body');
const elNavBox = document.querySelector('#navBox');


const setDevice = [
  {size: 768, thpe:'moblie', mav:'../temp/e_08_rwd_mob.html', script:'../dist/rwd/e_08_rwd_nav_moblie.js'},
  {type:'pc',     nav:'../temp/e_08_rwd_pc.html', script:'../dist/rwd/e_08_rwd_nav_pc.js'}
];

const mediaSize = `screen and (max-width:${setDevice[0].size}px)`;
const mediaMatch = window.matchMedia(mediaSize);

