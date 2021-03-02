// 在每一轮挑选一个基准元素，并让其他比它大的元素移动到数列一边，比它小的元素移动到数列的另一边，从而把数列拆解成两个部分
/**
 * 
 * @param {*} nums 
 */
function sort(nums = [],start_index,end_index){
    if(start_index >= end_index) {
        return nums;
    }
    let pivot_index =partition2(nums,start_index,end_index);
    console.log(pivot_index);
    sort(nums,start_index,pivot_index-1);
    sort(nums,pivot_index+1,end_index);
    return nums;
}

/**
 * 双边循环法
 * @param {*} nums 
 * @param {*} start_index 
 * @param {*} end_index 
 * @returns 
 */
function partition(nums = [], start_index,end_index) {
    let pivot = nums[start_index];
    let left = start_index;
    let right = end_index;
    while(left !== right){
        while(left < right && nums[right] > pivot){
            right --;
        }
        while(left < right && nums[left] <= pivot){
            left ++;
        }
        if(left < right){
            let p = nums[right];
            nums[right] = nums[left];
            nums[left] = p;
        }
    }
    nums[start_index] = nums[left];
    nums[left] = pivot;
    return left;
}

function partition2(nums = [],start_index,end_index){
    let pivot = nums[start_index];
    let mark = start_index;
    for (let i = start_index + 1; i <= end_index; i++) {
        if(nums[i] < pivot){
            mark++;
            let temp = nums[mark];
            nums[mark] = nums[i];
            nums[i] = temp;
        }        
    }
    nums[start_index] = nums[mark];
    nums[mark] = pivot;
    return mark;
}


let nums = [4,7,6,5,3,2,8,1];
sort(nums,0,nums.length - 1);
console.log(nums);
