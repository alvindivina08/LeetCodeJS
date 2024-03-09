var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    console.log(freqMap);
    for(let [num, freq] of freqMap) {
        console.log('---')
        console.log(`num is ${num} and freq is ${freq}`)
        bucket[freq] = (bucket[freq] || new Set()).add(num);
        console.log(bucket[freq]);
        console.log(bucket)
    }
    console.log('\n')
    console.log(bucket)
    for(let i = bucket.length-1; i >= 0; i--) {
        console.log('\n')
        console.log(bucket[i])
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};

// const nums = [1,1,1,2,2,3,3,3,3]
const nums = [500, 500 ,500, 200, 200, 800, 800, 800, 800, 800, 100]
const k = 2
const result = topKFrequent(nums, k);
console.log(result)