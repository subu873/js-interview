//sum(1)(2)(3) == 6
// sum(1)(2)(3)() === 6

const sum = a => b => c => a + b + c

function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

// sum(1)(2)(3)() === 6

function sumCall(a) {
    return function (b) {
        if (b) {
            return sumCall(a + b)
        } else {
            return a
        }
    }
}

