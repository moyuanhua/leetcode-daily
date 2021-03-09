/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1);
    let stack = [];
    for (let i = 0; i < nums.length * 2; i++) {
        let index =  i % nums.length;
        while(stack.length){
            value = stack.pop();
            if(nums[value] < nums[index]){
                res[value] = nums[index];
            }else{
                stack.push(value)
                break;
            }
        }
        stack.push(index);
    }
    return res;
};


// var helpObj = function(val){
//     this.val = val;
// }

// @lc code=end

