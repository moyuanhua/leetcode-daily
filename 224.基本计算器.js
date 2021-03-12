/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  let res =0,num=0,sign = 1,stack=[];
  for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if(isNum(ch)){
          num = 10 * num + Number(ch)
      }else if(ch === '+' || ch === '-'){
          res += sign * num;
          num = 0;
          ch === '+' ? sign = 1 : sign = -1
      }else if(ch === '('){
          stack.push(res);
          stack.push(sign);
          res = 0;
          sign = 1
      }else if(ch === ')'){
          res += sign * num;
          num = 0;
          res *= stack.pop()
          res += stack.pop()
      }
    //   console.log(res,num,sign,stack)
  }
  res += sign * num
  return res;
};

var isop = function(ch){
    return ['+','-'].includes(ch)
}

var isNum = function(ch){
    return ['0','1','2','3','4','5','6','7','8','9'].includes(ch)
}



// @lc code=end
calculate("(1+(4+5+2)-3)+(6+8)")
