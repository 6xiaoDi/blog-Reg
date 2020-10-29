let mystr = "hello";
let reg = /hello/; // 完全匹配
let str = "hello world";
let res  = str.match(reg);
console.log(res);