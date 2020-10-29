let str = `abcd
efgfda`;
// let reg = /^/g;
let reg = /^/gm;
let res  = str.replace(reg,"*");
console.log(res);