/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
    let freqMap = new Map();
    let l_far = 0;
    let l_near = 0;
    let res = 0;

    // initialize the right pointer
    for (let r = 0; r < nums.length; r++) {
        // store or elements in a map
        freqMap.set(nums[r], (freqMap.get(nums[r]) || 0 ) + 1)
        
        // check if size is greater than k
        while (freqMap.size > k) {
            // subtract the count of elements
            freqMap.set(nums[l_near], freqMap.get(nums[l_near]) - 1)
            // and if its 0, delete the element
            if (freqMap.get(nums[l_near]) === 0) {
                freqMap.delete(nums[l_near])
            }

            // move l_near pointer and l_far pointer
            l_near += 1;
            l_far = l_near
        }

        // and if nums[l_near] has more than elements in the map
        while (freqMap.get(nums[l_near]) > 1) {
            // we subtract the element
            freqMap.set(nums[l_near], freqMap.get(nums[l_near]) - 1)
            // and move the near pointer to one
            l_near += 1
        }

        // if the size is equals to k
        if(freqMap.size === k) {
            // increment result by subtracting l_near minus l_far plus one
            res += l_near - l_far + 1
        }
    }

    return res
};