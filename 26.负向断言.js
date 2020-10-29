let str = "10px20px30pxipx";  //px 转成 像素；
// let reg = /\d{2}px/g;
let reg = /(?<=\d{2})px/g;
let res = str.replace(reg,"像素");
console.log(res);