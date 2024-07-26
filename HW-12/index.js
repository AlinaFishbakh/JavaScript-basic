// task 1 //
function summarize(num) {
    return (nextNum) => {
        if (nextNum === undefined) {
            return num + 1;
        }
        return num + nextNum;
    }
}

// task 2 //
function counter(startValue, step) {
    let currentValue = startValue

    const increment = () => {
      currentValue += step
      return currentValue
    }
    
    function main() {
      return increment()
    }
  
    main.increment = increment
    main.decrement = () => {
      currentValue -= step
      return currentValue
    }
    main.reset = () => {
      currentValue = startValue
      return currentValue
    }
  
    return main
}

// task 3 //
function sequence(...functions) {
    let result;
    let funcIndex = 0
    return () => {
        if (!functions[funcIndex]) {
            return result;
        }
        result = functions[funcIndex](result)
        funcIndex++;
        return result
    }
}