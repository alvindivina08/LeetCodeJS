/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let count = 0;
    let result = 0;
    let maxNum = Math.max(...nums)

    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r] === maxNum) {
            count++
        }

        while(count > k || (l < r && nums[l] !== maxNum && count === k)) {
            if(nums[l] === maxNum) count--;
            l++
        }

        if (count === k) {
            result += l + 1
        }
    }
    return result
};