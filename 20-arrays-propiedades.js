// 1.

const fruits = Array('Apple', 'banna','orange')
console.log(fruits)

const number = Array(1,2,3,4,5)
console.log(number)

// 2. Array literal SyntaxError

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const repipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredient: 'Milk', quantity: '1 cup'
    },
    false
]
console.log(repipeIngredients)

// Accessing array elements

// Busqueda por index
const firstFruits = fruits[0]
console.log(firstFruits)

// Tamaño
console.log(fruits.length)

// Mutability
fruits.push('Nuevooo')
console.log(fruits)

// Immutability
const newFruits = fruits.concat(['Nuevo2','NMuevo3'])
console.log(newFruits)

// Checking arrays with array --> ¿Es array?
const isArray = Array.isArray(fruits)
console.log(isArray)

// Practical exercise: sum all elemnets of an array
const numbersArray = [1,2,3,4,5]
let sum = 0

for (let i;i < numbersArray.length;i++) {
    sum += numbersArray[i]
}
