
function bucketSort(nums = []) {
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
    let d = max - min;
    let len = nums.length;

    let bucketArr = []
    for (let i = 0; i < len; i++) {
        bucketArr.push(new Array())
    }

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        let num = Number(parseInt((nums[i] - min) * (len - 1) / d))// 求区间
        bucketArr[num].push(value)
    }

    for (let i = 0; i < bucketArr.length; i++) {
        bucketArr[i].sort();
    }

    const sortArr = [];
    for (let i = 0; i < bucketArr.length; i++) {
        const arr = bucketArr[i];
        for (let j = 0; j < arr.length; j++) {
            const value = arr[j];
            sortArr.push(value)
        }
    }
    console.log(bucketArr);
    console.log(sortArr);
    return sortArr;
}

bucketSort([1, 2, 3, 4, 5, 6, 7])