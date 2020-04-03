//Exercise 1
const maxCapacity = 14 // logging prints 14
let surfTime = true // logging prints true
let bestStudent // " " undefind 
const purposeInLife // error
console.log(maxCapacity)
console.log(surfTime)
console.log(bestStudent)
console.log(purposeInLife)


//Exercise 2
const myVariable = "my variable "
const result = myVariable + "is the best thing ever"
console.log(result) // prints: my variable is the best thing ever


//Exercise 3
let password = '123'
let confirmPassword = '456'

if (password === confirmPassword) {
    console.log('welcome')
}
else {
    console.log('wrong password')
}


//Exercise 4
x = 423 * 12
y = 802 / 2
z = (5 + 6) * 3


//Exercise 5
/*
(5 > 2) && false
>falsy

!("knife" === "sword")
>truthy

(1 < 2) || (-1 > -1) || !false
>truthy

(31 % 5) == "1"
>truthy

!!true
>truthy

"5th Avenue" != "5th Avenue"
>falsy

52 !== "52"
>truthy

(undefined || null)
>falsey
*/

//Exercise 6
let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b
// a = 0 , b = 2 , c = 2