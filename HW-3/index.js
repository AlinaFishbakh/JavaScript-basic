//1
let number = 30
if(number %3===0){
  console.log("Fizz")
}
if(number %5===0) {
  console.log("Buzz")
}
if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz")
}
    
//2
let year = 2024
if (year % 4===0){
   console.log(`${year} is a leap year!`)
}
else {
  console.log(`${year} is not a leap year!`)
}

//3
let age = 3
if(age===1) {
  console.log(`Вам ${age} рік`)
}
else if (age<5 || (age %100>20 && age %10<5)) {
   console.log(`Вам ${age} рoки`)
}
else {
  console.log(`Вам ${age} рoків`)
}