// Methods Inmutability

// Map()

const numbers = [1,2,3,4,5]

const squaredNumbers = numbers.map(num => num * num)

console.log(numbers)
console.log(squaredNumbers)

// forEach()

const colors = ['red','pink','blue']
const iteratedColors = colors.forEach(color => console.log(color))

console.log(colors)
console.log(iteratedColors)

//////////////////// Ejercicio 1 \\\\\\\\\\\\\\\\\\\\\\\\\
// Conversión de Fahrenheit a celsius
// Formula C = (5/9) * F-32

const temperaturesInFahrenheit = [32,68,95,104,212]

const temperaturesInCelcius = temperaturesInFahrenheit.map(Fahrenheit => (5/9)*(Fahrenheit-32))

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit)
console.log('Temperatures In celsius: ', temperaturesInCelcius)

//////////////////// Ejercicio 2 \\\\\\\\\\\\\\\\\\\\\\\\\
// Crear una suma del array

const nuwNumbers = [1,2,3,4,5]

let sum = 0;

nuwNumbers.forEach(number => {
    sum += number;
})

console.log('Array of Numbers: ',nuwNumbers)
console.log('Sum of Numbers: ',sum)
