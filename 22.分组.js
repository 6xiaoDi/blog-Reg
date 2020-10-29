let str = "fdsabc123fdsfds444";
// let reg = /abc\d+/g;
let reg = /(abc)(\d+)/g; // 分组取数据
let res =  str.match(reg);
// console.log(res);
let $1 = RegExp.$1;
// console.log(RegExp.$1);
// console.log(RegExp.$2);
let $2  = RegExp.$2;
console.log($1,$2);