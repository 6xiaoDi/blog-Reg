let str = "fdsabc123fdsfdsabc444";
let reg = /abc\d+/g;
let res =  str.match(reg);
console.log(res);