// Task 1

const currentNumber = 11
let divider = 2
let isPrime = true;

do {
    if (currentNumber % divider === 0) {
        isPrime = false
        break;
    }
    divider++;
} while (divider !== currentNumber)

if (isPrime) {
    console.log(`Число ${currentNumber} не є простим числом`)
} else {
    console.log(`Число ${currentNumber} є простим числом`)
}

// Task 2

const userNumber = 9
let result = 1
let count = 2

console.log(`Досконалі числа від 1 до ${userNumber}:`)

while (result < userNumber) {
    console.log(`Досконале число ${result}!`)
    result = result + count
    count++;
}



