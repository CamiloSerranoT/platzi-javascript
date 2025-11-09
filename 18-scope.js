// Se accede a la información dentro de la funcion y 'brand' si seria la global
//// Esto por que se solicitita la info dentro de la funcion y se tiene el alcance
const productName = "laptop";
const price = 899;
const brand = "techCode";

function getProductInfo() {
    const productName = "smartphone";
    const price = 499;
    return `${productName} costs ${price} and is of brand ${brand}`;
}

console.log(getProductInfo());

//// Se tiene acceso a las variables globales 

let userPoints = 80;

function evaluatePoints() {
    if (userPoints < 100) {
        console.log("Below average");
    } else {
        console.log("Above average");
    }
}

console.log(evaluatePoints());

// V a generar errores por que las variables "localVariable" y "local3Variable" no estan instanciadas en el mismo nivel 

const globalVariable = "global1";

function local1() {
    console.log(globalVariable); // Accede correctamente a "global1"
    console.log(localVariable); // Error: localVariable no está definida

    function local2() {
        const carrot = "🥕";
        console.log(`local2: ${carrot}`);
    }

    function local3() {
        console.log(local3Variable); // Error aquí también
    }

    local2();
    local3();
}
console.log(local1());