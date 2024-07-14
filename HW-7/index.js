//Task 1//
function reverseArray(arr) {
    return arr.reverse()
}

const numList = [1, 2, 3, 4, 5]
const reversedNumList = reverseArray(numList)
console.log(reversedNumList)

//Task 2//
function uniqueValues(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);
console.log(uniqueValuesArray);

//Task 3//
function calculateAverageGrade(students) {
    const sumOfGrades = students.reduce((acc, student) => acc + student.grade, 0);
    return parseFloat((sumOfGrades / students.length).toFixed(1))
}

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students)); // 4.4
