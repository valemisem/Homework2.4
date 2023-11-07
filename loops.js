// function convertTemperature(value){
//     return value/5
// }
// let testArr = [3,5,7,80,45]

// //первый способ написать цикл
// let i=0
// while (i<testArr.length){
//     console.log(convertTemperature(testArr[i]))
//     i++
// }

// //второй способ написать цикл
// let i=0
// do {
//     console.log(convertTemperature(testArr[i]))
//     i++
// } while (i<testArr.length)

// // третий способ
// for (const value of testArr) {
//     console.log(convertTemperature(value));
// }

// // четвертый способ, через создание объекта

// let testObj = {
//     '0': 32,
//     'val': 54,
//     '6': 34
// }

// for (let key in testObj){
//     console.log(convertTemperature(key) + ' is equal to ' + testObj[key])

// }
// console.log(testObj.val)
// console.log(testObj['val']) // мы можем обращаться к значению объекта как через квадратные скобки так и через точку

// цикл в цикле
let expenses  = [-100, -200, 300, 500]
let sum = 0
for (let i=0; i<expenses.length; i++){
    if (expenses[i]<0) continue // сколько бы кода нен было, если условие выполняется, то ниже не пойдет, пойдет на итерацию с инкрементом
    sum += expenses[i]
}
console.log(sum)

// цикл в цикле, двумерная матрица
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// search: for (let i=0; i<matrix.length; i++){
//     for (let j=0; j<matrix[i].length; j++){
//         console.log(`current element is ${matrix[i][j]}`)
//         if (matrix[i][j] === 5){
//             console.log(`element is at ${i}, ${j}`)
//             break search // мы добавили ключевое слово, и мы останавливаем именно эту часть, на цикл выше
//         }
//     }
// }

// метод forEach
    
matrix.forEach((value, index) => {
    console.log(index, value)

}) // just output array
    