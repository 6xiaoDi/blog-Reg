let mystr = "hello";
let str = "hello world1231";
let reg = new RegExp("\\d+","gi");
let res  = str.match(reg);
console.log(res);