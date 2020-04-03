//Exercise 1
names = ['samer', 'dan', 'tony', 'ahmad']
ages = [13, 20, 33, 58]

for (let i = 0; i < names.length; i++) {
    console.log(` ${names[i]} is ${ages[i]} years old`)
}

//Exercise 2
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
sum = 0
for (num in numbers) {
    sum += numbers[num]
}
console.log(sum)

//Exercises 3
console.log(sum / numbers.length)

//Exercise 4
nums = []
for (let i = 1; i < 101; i++) {
    nums.push(i)
}

//Exercise 5
for (let i = 0; i < 100; i++) {
    if (nums[i] % 2 === 1) {
        console.log(nums[i])
    }
}