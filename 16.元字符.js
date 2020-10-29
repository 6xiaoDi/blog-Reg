let str = "abc434_3def";
// \w : 数字、字母、下划线 （_）;
let reg = /^a\w+f$/g;
let res =  reg.test(str);
console.log(res);