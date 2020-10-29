// 替换；
let str = "fdasf234dfaf342";// --->数字替换*
// let reg = /\d+/g;
let reg = /\d/g;
let newstr = str.replace(reg,"*");
console.log(newstr)