// creacion

function suma (a, b) {
    return a + b;
}

console.log(suma(5,6))

// Ejercicio precio Black Friday

function calcularDiscountPrince (price, discountPer) {
    const discount = (price * discountPer) / 100;
    const priceWithDiscount = price - discount;
    return priceWithDiscount;
}

const originalPrice = 100
const discountPer = 20
const finalPrice = calcularDiscountPrince(originalPrice,discountPer);

console.log(`Original Price: $ ${originalPrice}`);
console.log(`Discount: ${discountPer}`);
console.log(`Price with discount: $ ${finalPrice}`);


//Posibilidades con funciones
// 1. Callback - Pasar argumentos

function a () {}
function b (a) {}
b(a)

// Retorno de funciones

function a () {
    function b () {}
    return b
}

b(a)

// Asignar funciones a variables --> Expresion de funcion

const a3 = function () {}

// Tener propiedades y metodos

function a () {}
const obj = {}
a.call(obj)

// Anidar funciones - Nested functions

function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()

// ¿Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage () {
        console.log('Lanzamiento')
    }
}

rocket.launchMessage()