let expr = 'Mangos'

switch(expr) {
    case 'Naranjas':
        console.log('Las Naranjas cuestan $5.000 el kilo');
        break;
    case 'Manzanas':
        console.log('Las Manzanas cuestan $6.000 el kilo');
        break;
    case 'Mangos':
    case 'Papayas':
        console.log('Los mangos y las Papayas cuestan $10.000 el kilo');
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`);
}

