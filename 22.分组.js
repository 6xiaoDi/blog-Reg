let str = "fdsabc123fdsfdsabc444";
// let reg = /abc\d+/g;
let reg = /(abc)(\d+)/g; // 分组取数据
let res =  str.match(reg);
// console.log(res);
let $1 = RegExp.$1;
console.log(RegExp.$1);