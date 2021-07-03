/**
 * 给定一个数字，我们按照如下规则把它翻译为字符串：
 * 0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。
 * 请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
*/

// 请注意 只需要计算次数

// f(n) = f(n-1) + f(n-2) 当 10 <= Number(n,n-1) <= 25
// f(n) = f(n-1) 当  Number(n,n-1) <= 10 || Number(n,n-1) >= 10


var translateNum = function(num) {
    let str = String(num);
    let len = str.length;
    let a1 = 1;
    let a2 = 1;
    for(let i=2;i<=len;i++){
        let sub = str.substr(i-2,2);
        let sub_num = parseInt(sub);
        let z = sub_num >= 10 && sub_num <= 25 ? a1 + a2 : a2;
        a1 = a2;
        a2 = z;
    }
    return a2;
}