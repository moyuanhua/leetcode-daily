/**
 * 冒泡排序 https://leetcode-cn.com/leetbook/read/journey-of-algorithm/5rxj8i/
 * @param {*} nums [8,12,31,41,2,34,1]
 */
function sort(nums = []) {
    // 长度为7的数组 循环6次 每一次找到一个最大值 
    let last_exchange_index = 0;
    let sort_border = nums.length - 1;
    for (let i = 0; i < nums.length - 1; i++) {
        // const value = nums[i];
        // 
        let is_sort = true;
        for (let j = 0; j < sort_border; j++) {
            // const value2 = nums[j];
            let temp = 0;
            if (nums[j] > nums[j + 1]) {
                temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp
                is_sort = false;
                last_exchange_index = j;
            }
        }
        sort_border = last_exchange_index;
        // console.log(is_sort,sort_border,nums)
        if (is_sort) {
            break;
        }
    }
    return nums;
}

sort([3, 4, 2, 1, 2, 5, 6, 7, 8]);