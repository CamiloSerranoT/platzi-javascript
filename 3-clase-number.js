// 1. Entero y Decimal
const numEntero = 42
const numDecimal = 3.14

console.log(typeof numEntero, typeof numDecimal)

// 2. Notación cientifica
const numCientifico = 5e3

// 3. Infinitos y NaN
const numInfinito = Infinity
const numEsUnNumero = NaN // Not a Number

// Operaciones aritmeticas

// 1. Suma, Resta Multiplicación y División

const suma = 3 + 4
const resta = 3 - 4
const multiplicacion = 3 * 4
const division = 3 / 4

// 2. Modulo y Explonenciación
const modulo = 15 % 8
const exponenciacion = 2 **3

// Precisión
const resultado = 0.1 + 0.3
console.log(resultado)
console.log(resultado.toFixed(1))

console.log(resultado === 0.5)

// Operaciones
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()

console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)