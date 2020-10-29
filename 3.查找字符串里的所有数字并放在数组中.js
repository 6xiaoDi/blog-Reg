let str = "afdafdf12321fdsafd12312fda33535";
let reg = /\d+/g;
let res =  str.match(reg); // match 匹配我们定义的正则规则
console.log(res);