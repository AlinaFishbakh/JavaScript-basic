// task 1 //
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// task 2 //
function reverseNumber(num) {
    return Number(num.toString().split("").reverse().join(""))
}

function producePolindrome(num, stepsCount = 1) {
    const polindromicSum = num + reverseNumber(num)
    const isSumPolindrome = polindromicSum === reverseNumber(polindromicSum)

    if (isSumPolindrome) return { result: polindromicSum, steps: stepsCount }

    return producePolindrome(polindromicSum, stepsCount + 1)
}

// task 3 //
function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        for (let i = start; i < nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0);
    return result;
}