//estructura de control

// const puntaje = 1000;

// if (puntaje === 1000){
//     console.log(`Si el puntaje es 1000`);
// } else{
//     console.log('No es igual');
// };


// const efectivo = 1000
// const carrito = 800

// if (efectivo>carrito){
//     console.log('Si puede pagar');
// } else {
//     console.log('No puede pagar');
// }

// const rol= 'Editor';

// if (rol === 'Admin'){
//     console.log('Acceso a todo');
// } else if (rol === 'Editor'){
//     console.log('Acceso a las funciones de Editor');
// } else{
//     console.log('sin acceso');
// }

const métodoPago = 'Cheque';

switch (métodoPago){
    case 'tarjeta':
        console.log(`realiza pago con ${métodoPago}`);
            break;
        case 'Cheque':
            console.log(`realiza pago con ${métodoPago}`);
            break;
        case 'Efectivo':
            console.log(`realiza pago con ${métodoPago}`);
            break;
        default:
            console.log('aun no se a pagado');
            break;
};