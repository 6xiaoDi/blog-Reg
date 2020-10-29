// {}数量；
let str = "abcaaabcdaafdsa";
// let reg= /aa/g;
let reg= /a{2}/g; // 指定a出现两次
let res =  str.replace(reg,"*");
console.log(res);