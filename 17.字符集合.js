// []:字符集合
let str = "fdsafdafabfdsaf";
let reg = /a|b/g;
let res =  str.replace(reg,"*");
console.log(res);