let str = `<div>fdsafdsaf</div>`;
// 注意</div>中“/”需要转义，否则判定为正则的结束符号了！
let reg = /<div>.*<\/div>/g;
let res =  reg.test(str);
console.log(res);