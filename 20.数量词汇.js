// {}数量；
let str = "abcaaabcdaafdsa";
// let reg= /aa/g;
// let reg= /a{2}/g; // 指定a出现两次
// let reg= /a{3}/g; // 指定a出现3次
let reg= /a{2,3}/g; // 指定a出现2次或3次
let res =  str.replace(reg,"*");
console.log(res);