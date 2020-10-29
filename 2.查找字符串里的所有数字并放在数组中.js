let str = "afdafdf12321fdsafd12312fda33535";
// 得到的结果：[12321,12312];
function getNumber(str){
    let temp = "";
    let arr = [];
    for(let i=0;i<str.length;i++){
        if(!isNaN(str[i])){
            temp+=str[i];
        }else{
            if(temp !=""){
                arr.push(temp);
                temp = "";
            }
        }
    }
    console.log(arr);
}
let res =  getNumber(str);