// Forma explicita de tipos
const string ='42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

// Forma Implicit type Casting
const sum = '5' + 3
console.log(sum) // 53

const sum2 = parseInt('5') + 3
console.log(sum2) // 8

const boolean1 = '3' + true
console.log(boolean1) // 3true

const NUmber1 = 3 + true
console.log(NUmber1) // 4

console.clear()

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue) // 1010
console.log(stringValue + numberValue) // 1010
console.log(stringValue + booleanValue) // 10true

console.log(numberValue + stringValue) // 1010
console.log(numberValue + numberValue) // 20
console.log(numberValue + booleanValue) // 11

console.log(booleanValue + stringValue) // true10
console.log(booleanValue + numberValue) // 11
console.log(booleanValue + booleanValue) // 2