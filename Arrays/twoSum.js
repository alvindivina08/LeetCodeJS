/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create map using javascript
    const map = new Map();
    // loop through the nums array
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if (map[complement] !== undefined) {
            return [map[complement], i]
        }
        map[nums[i]] = i;
    }
};

const test = [
    [[2,7,11,15], 9],
    [[3,2,4], 6],
    [[3,3], 6]
]

test.forEach((value) => {
    const answer = twoSum(value[0], value[1]);
    console.log(answer)
})