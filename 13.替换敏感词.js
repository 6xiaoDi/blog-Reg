// 替换敏感词；
let str = "然后，正则表达式在各种计算机语言或各种应用领域得到了广大的应用和发展，演变成为计算机技术森林中的一只形神美丽且声音动听的百灵鸟。以上是关于正则表达式的起源和发展的历史描述，如今正则表达式在基于文本的编辑器和搜索工具中依然占据着一个非常重要的地位";
// 把正则 替换成  "*";
// let reg = /正则/g;
let reg =  /正则|计算机/g;;
// let newStr =  str.replace(reg,"*");
let newStr = str.replace(reg,function(arg){
    // 会把符合规则的字符放入arg
    // console.log(arg);
    return "*".repeat(arg.length);
})
console.log(newStr);