let str = "fdsafdSAaf4324abABCf4535dsaf";
// let reg = /[a-z]/g;
// let reg = /[a-zA-Z]/g
// let reg = /[0-9]/g
let reg = /[0-20]/g
let res =  str.replace(reg,"*");
console.log(res);