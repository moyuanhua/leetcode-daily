/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

let map = new Map();
let preindex =0;


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length){
        return null
    }
    let pre_index = 0;
    let map = new Map();
    for(let i=0;i<inorder.length;i++){
        const value = inorder[i];
        map.set(value,i);
    }
    console.log(map.get(3))
    

    const dfs = (pre,left,right) => {
        if(left > right) return null;
        let root = new TreeNode(pre[pre_index]);
        let in_index = map.get(root.val);
        pre_index++;
        root.left = dfs(pre,left,in_index -1)
        root.right = dfs(pre,in_index+1,right);
        return root;
    }
    return dfs(preorder,0,preorder.length -1);
};

// var d

// @lc code=end

buildTree([3,9,20,15,7],[9,3,15,20,7]);
