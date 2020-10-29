let str = "iphone6iphone7iphone11iphonenumber";
// iphone-->苹果
let reg = /iphone\d{1,2}/g
let res  = str.replace(reg,"苹果");
console.log(res);