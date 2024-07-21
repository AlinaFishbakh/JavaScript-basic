//task 1//
function isPrime(num) {
  let divider = 2
  let prime = true;
  
  if(num <= 2) return true

  do {
      if (num % divider === 0) {
          prime = false
          break;
      }
      divider++;
  } while (divider !== num)
    
  return prime
}

function getPrimeNumbers(numbers) {
  return numbers.filter(isPrime)
}

console.log(getPrimeNumbers([3, 4, 5, 10, 12, 11]))

//task 2//
function getNotifications(notifications) {
    return notifications.reduce((acc, notification) => ({
        ...acc,
        [notification.source]: [...(acc[notification.source] ?? []), notification]
    }), {})
}

//task 3//
function group(callback) {
    return this.reduce((acc, item) => {
        const source = callback(item)
        return {
            ...acc,
            [source]: [...(acc[source] ?? []), item]
        }
    }, {})
}