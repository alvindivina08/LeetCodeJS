/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []
    if (nums.length < 3) return nums;

    nums.sort((a,b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        let n = i + 1;
        let k = nums.length - 1;

        const target = 0;

        if (i > 0 && nums[i] === nums[i -1]) continue;

        while( n < k ) {
            let sum = nums[i] + nums[n] + nums[k];

            if (sum === target) {
                result.push([nums[i], nums[n], nums[k]]);
                n++;
                k--;
                while ( nums[n] === nums[n - 1]) n++;
                while ( nums[k] === nums[k + 1]) k--;
            } else if (sum < target) {
                n++
            } else {
                k--
            }
        }                
    }

    return result
};

const test = [
    [-1,0,1,2,-1,-4],
    [0,1,1],
    [0,0,0]
];

test.forEach((value) => {
    const answer = threeSum(value);
    console.log(answer);
})
