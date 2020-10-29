// {}数量；
let str = "abcaaabcdaafdsa";
let reg= /aa/g;
let res =  str.replace(reg,"*");
console.log(res);