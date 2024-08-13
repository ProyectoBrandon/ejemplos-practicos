// for loops

// for( let i=0; i<=10; i++ ){
//     console.log(i);
// }


// for( let i=1; i<=10; i++){
//     if( i%2===0 ){ 
//         console.log(`El numero ${i} es par`);
//     }else {
//         console.log(`El numero ${i} es impar`);
//     }
// }

// const carrito = [
//     {nombre: 'Monitor de 20 pulgadas', precio:500},
//     {nombre: 'TV 50 pulgadas', precio:700},
//     {nombre: 'Tablet', precio:300},
//     {nombre: 'Audífonos', precio:20},
//     {nombre: 'Teclado', precio:50},
//     {nombre: 'Celular', precio:500},
//     {nombre: 'Bocina', precio:300},
//     {nombre: 'laptop', precio:800}
// ];

// for( let i = 0; i < carrito.length;i++){
//     console.log(carrito[i].nombre);
    
// };


//while loop

// let i =1; //indice

// while (i<=10){//condición 
//     if( i%2 === 0){
//         console.log(`El numero ${i} es par`);
        
//     } else {
//         console.log(`El numero ${i} es impar`);
        
//     }

//     i++;//incrementos
// }


//do while loop

let i=1;

do{
    if( i % 2 ===0){
        console.log(`el numero ${i} es par`);
    } else {
        console.log(`el numero ${i} es impar`);
    }
    
    

    i++;
} while (i<=10);
