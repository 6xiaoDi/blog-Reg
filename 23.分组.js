// let str = "2019-12-4";  //  -->4/12/2019;
let str = "2019-1-4";
// let reg = /(\d{4})-(\d{2})-(\d{1,2})/g;
let reg = /(\d{4})-(\d{1,2})-(\d{1,2})/g;
let res =  str.replace(reg,"$3/$2/$1");
console.log(res);