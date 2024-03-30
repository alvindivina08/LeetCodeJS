/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // const seen = new Set();
    const seen = new Map();
    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            // seen.set(nums[i], (seen.get(nums[i]) || 0) + 1)
            return true;
        }
        seen.add(nums[i]);
    }
    return seen
};

const test = [
    [1,2,3,4],
    [1,1,1,3,3,4,3,2,4,2, 100, 200, 300, 300, 300, 20 ,24,  23]
]

test.forEach((value) => {
    const answer = containsDuplicate(value);
    console.log(answer)
})
