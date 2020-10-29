let str = "a,b,c,d";
// let arr =  str.split(",");
let reg = /,/g;
let arr =  str.split(reg);
console.log(arr);