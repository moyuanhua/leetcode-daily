/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid === null || grid.length === 0){
        return 0;
    }

    let nr = grid.length;
    let nc = grid[0].length;
    let res = 0;

    const dfs = (r,c) => {
        if(r < 0 || c < 0 || c >= nc || r >= nr || grid[r][c] === '0'){
            return ;
        }
        grid[r][c] = '0';
        dfs(r-1,c);
        dfs(r+1,c);
        dfs(r,c+1);
        dfs(r,c-1);
    }

    for (let r = 0; r < nr; r++) {
        for (let c = 0; c < nc; c++) {
            if(grid[r][c] === '1'){
                ++res;
                dfs(r,c)
            }
        }
    }
    return res;
};
// @lc code=end

