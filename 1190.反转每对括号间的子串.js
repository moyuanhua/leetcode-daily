/*
 * @lc app=leetcode.cn id=1190 lang=javascript
 *
 * [1190] 反转每对括号间的子串
 */

// @lc code=start

let temp_end = 0;

/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    temp_end = 0;
    return help(s,0,s.length,0)
};
/**
 * 
 * @param {string} s 
 * @param {number} start 
 * @param {number} end 
 */
var help = function(s,start,end,deep){
    let stack = []
    for (let i = start; i < end; i++) {
        const char = s[i];
        if(char === '('){
            let str = help(s,i+1,end,deep+1);
            i=temp_end;
            stack.push(str);
        }
        else if(char === ')'){
            temp_end = i;
            break;
        }else{
            stack.push(char)
        }
    }
    if(deep % 2 === 1){
        stack =  stack.reverse();
    }
    return stack.join('')
    // console.log(stack);
    // return stack.reverse().join('');
}
// @lc code=end

console.log(reverseParentheses("(ed(et(oc))el)"))