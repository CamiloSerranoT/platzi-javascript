const numeroSecreto = Math.floor(Math.random() * 10 + 1)

console.log(`Este es el secrero ${numeroSecreto}`)

const prompt = require('prompt-sync')();

const numeroJugador = parseInt(prompt('Adivina el numero secrero:'));

console.log(`Este es el numero ${numeroJugador}`)


if (numeroJugador === numeroSecreto) {
    console.log('Bien')
} else if (numeroJugador < numeroSecreto) {
    console.log('El numero es menor que el aleatorio')
} else if (numeroJugador > numeroSecreto) {
    console.log('El numero es mayor que el aleatorio')
}