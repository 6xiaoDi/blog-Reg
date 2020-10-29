// let str = "this is a knife";
let str = "th$is is a knife";
// let reg = /is/g;
let reg = /\bis\b/g;
let res =  str.match(reg);
console.log(res);