//  // методы массивов

//  const values = [1, 23, 45, 67]
//  values.forEach (function(value, index, values){
//     console.log(`element: ${value}, index: ${index}, values: ${values.length}`)
//  })

//  // filter

//  const passwords = ['hhh', 'jjj', 'mnnmm', 'jjjjjjj']
//  const filteredArray = passwords.filter(function(password){
//     return password.length !== 5
//  })

//  console.log(filteredArray)

//  const scores = [65, 76, 89, 900, 32, 1]
//  const filteredScores = scores.filter((score) => {
//     return score > 45
//  })
//  console.log(filteredScores)

 // sort чисел ПО ВОЗРАСТАНИЮ ИЛИ ПО УБЫВАНИЮ

//  const numbers = [1,6,8,3,56,23,4]
//  const sortedNumbers = numbers.sort((a, b) => {
//     return (b-a)  // or a-b
//  })
//  console.log(sortedNumbers)


 // sort строк ПО ВОЗРАСТАНИЮ ИЛИ ПО УБЫВАНИЮ

 const passwords = ['hhh', 'jjjj', 'mnnmm', 'jjjjjjj']
 const sortedPasswords = passwords.sort((a, b) => {
        return (b.length-a.length)  // or a-b
     })
     console.log(sortedPasswords)
 

// // map - для перебора и ПРЕОБРАЗОВАНИЯ данных
// // чаще всего используется для создание объекта

// const values = [1, 23, 45, 67, 50, 20]
// const playerScores = values.map((value, index) => {
//     return {
//         id: index,
//         score: value
//     }
// })
// console.log(playerScores)

// The concat() method of Array instances is used to merge two or more arrays

const values = [1,2,3,4,5]
const values2 = [6,7]

const newArray = values.concat(values2)
// console.log(newArray)

// spread - оператор распространинения (...)

// console.log([... values, ... values2]) // also sums 2 arrays

console.log(Math.min(...newArray))
// console.log(Math.min(newArray)) // WRONG!!!! МЫ ДОЛЖНЫ развернуть МАССИВ




