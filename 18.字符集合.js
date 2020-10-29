// 把所有非 a 或者 b 的替换成 *；
let str = "fdsafdafabfdsaf";
let reg = /[^ab]/g
let res =  str.replace(reg,"*");
console.log(res);