let str = "iphone6iphone7iphone11iphonenumber";
// iphone-->苹果
// let reg = /iphone\d{1,2}/g
// ?= 表示可能存在后面的内容
// let reg = /iphone(?=\d{1,2})/g
let reg = /iphone(?!\d{1,2})/g // =换成！
let res  = str.replace(reg,"苹果");
console.log(res);