/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */
function TreeNode(val, left, right) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
}

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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root){
        return []
    }
    let stack = [root];
    let res = [];

    while(stack.length){
        let level = [];
        let len = stack.length
        for (let i = 0; i < len; i++) {
            let node  = stack.shift();
            level.push(node.val);   
            if(node.left){
                stack.push(node.left)
            }
            if(node.right){
                stack.push(node.right)
            }         
        }
        res.push(level)
    }
    return res;    
};
// @lc code=end

