// task 1 //
function doubleLetter(str) {
  return str.split('').reduce((result, char) => [...result, char, char], []).join('')
}

// task 2 //
function padString(str, length, symbol, toLeft = false) {
    if (str.length >= length) {
        return str
    }
    
    let resultStr = str

    while (resultStr.length < length) {
        if (toLeft) {
            resultStr = symbol + resultStr
            continue
        }
        resultStr = resultStr + symbol
    }

    return resultStr
}

// task 3 //
function camelCase(str, separator) {
  return str.split(separator).map((word, index) => {
    if(index === 0) return word.toLowerCase()
    const capitalized = word.charAt(0).toUpperCase() + word.toLowerCase().slice(1)
    return capitalized;
  }).join('')
}