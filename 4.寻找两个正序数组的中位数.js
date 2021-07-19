/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start


var merge = function(nums1, nums2) {
    let arr = [];
    let p1 = 0;
    let p2 = 0;
    let m = nums1.length;
    let n = nums2.length;
    while(p1 < m && p2 < n){
        if(nums1[p1] < nums2[p2]){
            arr.push(nums1[p1])
            p1++
        }else{
            arr.push(nums2[p2])
            p2++;
        }
    }
    while(p1 < m){
        arr.push(nums1[p1])
        p1++
    }
    while(p2 < n){
        arr.push(nums2[p2])
        p2++
    }

    // for (let i = 0; i != m + n; ++i) {
    //     nums1[i] = arr[i];
    // }
    return arr;
    
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    /* O(m +n) */
    // let arr = merge(nums1,nums2);
    // let len = arr.length;
    // if(len % 2 === 0){
    //     // return Math.floor()
    //     const mid = len /2 ;
    //     return (arr[mid] + arr[mid -
    //          1])/2
    // }else{
    //     const mid  = Math.floor(len /2)
    //     return arr[mid]
    // }
    


};
// @lc code=end

