// task 1 //
function logArguments(fn) {
    return (...args) => {
        console.log(args)
        return fn(...args)
    }
}

// task 2 //
function validate(fn, validator) {
    return (...args) => {
        if (!validator(...args)) {
            throw new Error('Validation failed')
        }
        return fn(...args)
    }
}

// task 3 //
function retry(fn, maxAttempts) {
    return (...args) => {
        let attempt = 1
        while (attempt <= maxAttempts) {
            try {
                return fn(...args)
            } catch (e) {
                attempt++;
            }
        }
    }
}