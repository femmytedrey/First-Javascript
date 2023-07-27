console.log('Hello from script')

//add 2 variable together
// let age = 35
// console.log(age)
// const salary = 3000000
// console.log(salary)
// const sum = age + salary
// console.log(sum)
// const person = {
//     'FirstName':'Femi',
//     'LastName':'Adeyemo',
//     'Age':25

// }
// console.log(person.FirstName)

// const carName = ['toyota', 'camry', 'mazda', 'volkwagen']
// console.log(carName[1])

// let x = 10
// let y = 5
// console.log(x * y)
// console.log(x % y)
// console.log(++x)

// console.log(x > 8 || 8 > y)
// const isEven = 10 % 2 === 0 ? 'Number is Even' : 'Number is Odd'
// console.log(isEven)

//implicit conversion
// console.log('4' * '2')
// console.log('4' / '2')
// console.log('4' * 'FemiCode')
// console.log('4' * false)
// console.log('24' * null)

//explicit conversion
// console.log(parseInt('5'))
// console.log(parseFloat('5.07'))
// console.log(String('500'))
// console.log((500).toString())
// console.log(Boolean(10))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))
// console.log(Boolean(null))

// const var1 = 10
// const var2 = '10'
// console.log(var1 == var2)
// console.log(var1 === var2)

//conditional statement
// const num = 5
// if(num > 0){
//     console.log('Number is positive')
// }else if(num < 0){
//     console.log('Number is negative')
// }else{
//     console.log('Number is zero')
// }

// const color = 'green'
// switch(color){
//     case 'red':
//         console.log('color is red')
//         break
//     case 'blue':
//         console.log('color is blue')
//         break
//     case 'green':
//         console.log('color is green')
//         break
//     default:
//         console.log('Enter a valid color')
        
// }

// for(let i = 1; i<=5; i++){
//     console.log('iteration number ' + i)
// }
// let i = 1
// while(i<=5){
//     console.log('iteration number ' + i)
//     i++
// }

// let i = 1
// do{
//     console.log('iteration ' + i)
//     i++
// }while(i<=5)

// const numArray = [1, 2, 3, 4, 5]

// for(const num of numArray){
//     console.log('Iteration number ' + num)
// }

function greet(username){
    console.log('Good morning ' + username)
}
greet('Femi')
greet('Collins')
greet('Nelson')

function add(a, b){
    return a + b
}
const sum = add(25, 20)
console.log(sum)

const arrowSum = (a, b) => a + b
const addFive = (num) => num + 5

const sum1 = arrowSum(24, 24)
console.log(sum1)

const sum2 = addFive(4)
console.log(sum2)
