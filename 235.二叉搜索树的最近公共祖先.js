/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root){
        return null;
    }
    let rv = root.val;
    let pv = p.val;
    let qv = q.val;

    if(pv > qv){
        let temp = pv;
        pv = qv;
        qv = temp;
    }


    if(rv === pv || rv === qv){
        return root;
    }
    if(rv > pv && rv < qv){
        return root;
    }
    if(rv > qv){
        return lowestCommonAncestor(root.left,p,q);
    }
    return lowestCommonAncestor(root.right,p,q);


    
};
// @lc code=end

