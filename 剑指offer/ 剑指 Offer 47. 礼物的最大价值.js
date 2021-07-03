/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxValue = function(grid) {
    let row = grid.length; // 多少行
    let colum = grid[0].length; // 每一行多少列
    // let x = 0;let y = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < colum; j++) {
            if(i ==0 && j==0){
                continue
            }else if(i == 0 && j !== 0){
                grid[i][j] = grid[i][j-1] + grid[i][j]
            }else if(i !== 0 && j==0){
                grid[i][j] = grid[i-1][j] + grid[i][j]
            }else {
                grid[i][j] = Math.max(grid[i][j-1],grid[i-1][j]) + grid[i][j]
            }            
        }        
    }
    return grid[row-1][colum-1]
};