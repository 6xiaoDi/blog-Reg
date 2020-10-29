let mystr = "hello";
// let reg = /hello/; // 完全匹配
let reg = /hello/g;
let str = "hello world";
let res  = str.match(reg);
console.log(res);