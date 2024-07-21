//task 1//
const groupedNotifications = {
    "Nikita": [
        {
            "source": "Nikita",
            "text": "Hi",
            "date": "02/02/2024"
        },
        {
            "source": "Nikita",
            "text": "Aloha",
            "date": "03/02/2024"
        }
    ],
    "Alina": [
        {
            "source": "Alina",
            "text": "Hello",
            "date": "04/02/2024"
        }
    ],
    [Symbol.iterator]: function() {
        const notificationsList = Object.values(this).flat()
        let index = 0
        return {
            next() {
                return index < notificationsList.length
                    ? {
                        value: notificationsList[index++],
                        done: false,
                    }
                    : {
                        done: true,
                    };
            },
        };
    }
};

for (let notification of groupedNotifications) {
    console.log(notification)
}

//task 2//
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const params = JSON.stringify(args)
        const funcResult = cache.get(params);

        if (funcResult) {
            return funcResult;
        }

        const newResult = fn(...args);
        cache.set(params, newResult)
        return fn(...args);
    }
}

//task 3//
function memoize(fn, cacheSize) {
    const cache = new Map();
    return function (...args) {
        const params = JSON.stringify(args)
        const funcResult = cache.get(params);

        if (funcResult) {
            return funcResult;
        }

        if (cache.size === cacheSize) {
            const keys = Array.from(cache.keys());
            cache.delete(keys[keys.length - 1])
        }

        const newResult = fn(...args);

        const cachedValues = Array.from(cache.entries())
        const keysWithDuplicatedResult = cachedValues.filter(([key, value]) => value === newResult).map(([key]) => key)
        keysWithDuplicatedResult.forEach((key) => cache.delete(key))

        cache.set(params, newResult)
        return fn(...args);
    }
}
