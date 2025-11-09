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
