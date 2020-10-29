let mystr = "hello";
let str = "hello world1231";
// let reg = new RegExp(mystr)
let reg = new RegExp(mystr,"g");;
let res  = str.match(reg);
console.log(res);