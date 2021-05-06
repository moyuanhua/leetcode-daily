/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for (let i = 0; i < bills.length; i++) {
        const item = bills[i];
        if(item === 5){
            five++
        }else if(item === 10){
            if(five > 0){
                five--
            }else{
                return false;
            }
            ten++
        }else {
            if(ten > 0 && five > 0){
                ten--;
                five--;
            }else if(ten === 0 && five >= 3){
                five -=3;
            }else {
                return false
            }
        }
        console.log(five,ten)
    }
    return true;
};
// @lc code=end

lemonadeChange([5,5,5,10,5,5,10,20,20,20]);