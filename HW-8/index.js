// Task 1 //
function capitalizeStrings(strings) {
    return strings.map((str) => {
        const capitalized = str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
        return capitalized
    })
}

const words = ["apple", "banaNA", "kiWi", "ORANGE"];
console.log(capitalizeStrings(words))

// Task 2 //
function findCommonElements(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item))
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(array1, array2));

// Task 3 // 
function analyzeArray(numArr) {
    const sum = numArr.reduce((acc, num) => acc + num, 0)
    const average = sum / numArr.length

    return {
        sum,
        average,
        min: Math.min(...numArr),
        max: Math.max(...numArr),
    }
}

const numbers = [1, 2, 3, 4, 5];

console.log(analyzeArray(numbers));