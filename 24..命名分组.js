let str = "fdsabc123fdsfdsabc444";
// let reg = /(abc)(\d+)/;
// let res =  str.match(reg);
// let reg = /(abc)(?<num>\d+)/;
let reg = /(?:abc)(?<num>\d+)/;
let res =  reg.exec(str);
console.log(res);