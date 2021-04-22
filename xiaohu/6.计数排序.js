
/**
 * 
 * @param {Array} nums 
 */
function countSort(nums) {
    let max = nums[0];
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        if (value > max) {
            max = value
        }
        if (value < min) {
            min = value;
        }
    }
    let countArr = new Array(max - min).fill(0);
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        countArr[value - min]++;
    }
    let sortArr = []
    for (let i = 0; i < countArr.length; i++) {
        while (countArr[i] > 0) {
            sortArr.push(i + min);
            countArr[i]--;
        }
    }
    return sortArr;
}

countSort([1, 3, 2, 9, 1, 3, 4, 5])