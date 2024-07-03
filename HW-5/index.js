//task1//
function reverseString(str) {
  return str.split("").reverse().join("")
}

console.log(reverseString("Hello world!"))


//task2//
function isPalindrome(str) {
  return str === reverseString(str)
}
console.log(isPalindrome("депомитимопед"))

//task3//
function findGCD(a, b) {
  while (b !== 0) {
     let temp = b;
     b = a % b;
     a = temp;
    }
    return a;
}
let num1 = 18;
let num2 = 24;
let gcd = findGCD(num1, num2);
console.log(`НСД чисел ${num1} і ${num2} є ${gcd}`); 
