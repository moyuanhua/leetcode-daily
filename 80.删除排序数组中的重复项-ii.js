/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let stack = [];
//     let temp = 0;

//     for (let i = 1; i < nums.length; i++) {
//         // const element = array[i];
//         if(nums[i] === nums[i-1]){
//             temp+=1;
//         }else{
//             temp = 0;
//         }
//         if(temp >= 2){
//             // 这是要删除的
//             // console.log(i)
//             stack.push(i);
//             continue;
//         }
//     }
//     while(stack.length){
//         let i = stack.pop();
//         nums.splice(i,1)
//     }
//     return nums.length;
// };

var removeDuplicates = function(nums) {
    if(nums.length <= 2){
        return nums.length;
    }
    let n = nums.length;
    let fast = 2;
    let slow = 2;
    while(fast < n){
         // 代表nums[slow]需要被取代
        if(nums[slow] !== nums[fast-2]){
            nums[slow++] = nums[fast]
        }
        fast++;
    }
    return slow;
}
// @lc code=end

removeDuplicates([1,1,1,2,2,3])