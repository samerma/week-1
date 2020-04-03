//Exercise 1
const calcAge = function (y1, y2) {
    return (y1 - y2)
}
const age = calcAge(2017, 1989)
console.log(age)

//Exercise 2
const calcAge2 = function (y1, y2) {
    a = calcAge(y1, y2)
    res = `You are either ${a} or ${a - 1}`
    return res
}
const age2 = calcAge2(2018, 2015)
console.log(age2)

//Exercise 3
const isEven = function (num) {
    return (num % 2 === 0)
}
console.log(isEven(4))

//Exercise 4
const printOdds = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            console.log(arr[i])
        }
    }
}

//Exercise 5
const checkExists = function (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true
        }
    }
    return false
}
console.log(checkExists([1, 2, 3], 2))
console.log(checkExists([1, 2, 3], 5))