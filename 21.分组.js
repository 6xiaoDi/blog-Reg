let str = "ababfdsafabfdsaabfdsa";
let reg = /(ab){2}/g; // 替换两个ab
let res =  str.replace(reg,"*");
console.log(res);