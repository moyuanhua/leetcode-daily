/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
   let sortarr = [];
   sort(root,sortarr);
   let min = Number.MAX_SAFE_INTEGER;
   for (let i = 1; i < sortarr.length; i++) {
       const value = sortarr[i];
       min = Math.min(min,value - sortarr[i-1])
   }
    return min;   
};


var sort = function(root,sortarr) {
    if(root.left){
        sort(root.left,sortarr)
    }
    sortarr.push(root.val);
    if(root.right){
        sort(root.right,sortarr)
    }
    return sortarr;
}

// @lc code=end

