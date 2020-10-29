let str = "fdsafdSAaf4324abABCf4535dsaf";
// let reg = /[a-z]/g;
let reg = /[a-zA-Z]/g
let res =  str.replace(reg,"*");
console.log(res);