/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let longest = 0;

    numsSet.forEach((value) => {
        if (!numsSet.has(value - 1)) {
            let end = value + 1;
            while (numsSet.has(end)) {
                end += 1;
                longest = Math.max(end - value, longest)
            }
            return longest
        }
    })

    longest = longest === 0 && numsSet.size > 0 ? 1 : longest;
    return longest;
};

const test = [
    [0,3,7,2,5,8,4,6,0,1],
    [100,4,200,1,3,2]
]

test.forEach((value) => {
    const result = longestConsecutive(value);
    console.log(result);
})
