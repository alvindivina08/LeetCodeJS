/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    // first update the result
    result[i] = prefix;
    // then multifly prefix to the current element.
    prefix *= nums[i];
  }

  // now initialize suffix to 1

  let suffix = 1;
  // itirate through nums from the last element.
  // make sure to touch the element 0

  for (let i = nums.length - 1; i >= 0; i--) {
    // now multiply result[i] with suffix.
    // i is last element
    result[i] *= suffix;
    // now update and multiply suffix using nums[i]
    suffix *= nums[i];
  }

  // return result

  return result;
};

const test = [
  [-1, 1, 0, -3, 3],
  [1, 2, 3, 4],
];

test.forEach((value) => {
  let result = productExceptSelf(value);
  console.log(result);
});


// The prefix value of the first element in the array should just be 1, since there are no values to the left of it.
// The suffix value of the last element in the array should just be 1, since there are no values to the right of it.

// i = 0
// first pass = result i is index 0 [result[i]]
// prefix is 1/
// 1 * nums[i] (1) is equals to 1
// result = [1]

// i = 1
// second pass
// result[1] is [1, result[1]] = prefix. prefix here is still 1.
// so result = [1, 1]
// 1 *= nums[1] // 2
// 2 times 1 is  now prefix is equals to 2

// i = 2
// prefix = 2
// result[i] is equals to 3 because its a 3rd pass
// result is now equals to [1, 1, 2]
// now 2 times nums[3]
// nums[3] is equals to 4.
// prefix = 2 times nums[3] which is 4
// 2 * 3 = 6

// now prefix is equals to 6

// i = 3, prefix = 6
// result[3] so result = [1, 1, 2, result[3]]
// result[3] is now 6.
// [1, 1, 2, 6]
// now prefix = 6 times nums[i] = 4. is equals to 24.
// now prefix is stuck to 24 without updating the results.
