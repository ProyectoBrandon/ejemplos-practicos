const meses=['Enero', 'Febrero', 'Marzo','Abril','Mayo'];

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio:500},
    {nombre: 'TV 50 pulgadas', precio:700},
    {nombre: 'Tablet', precio:300},
    {nombre: 'Audífonos', precio:20},
    {nombre: 'Teclado', precio:50},
    {nombre: 'Celular', precio:500},
    {nombre: 'Bocina', precio:300},
    {nombre: 'laptop', precio:800}
];

//foreach

meses.forEach( function (mes){
    if (mes === 'Enero') {
        console.log('Si existe');
    }else{
        console.log('No Existe')
    }
});

//includes arreglos planos no objetos
let resultados = meses.includes('Marzo');

// some ideal para arreglos
resultados=carrito.some(function(producto){
    return producto.nombre === 'Celular'
});

//Reduce

resultados = carrito.reduce(function(total, producto){
    return total+producto.precio
},0/*El "0" es el valor inicial*/);


console.log(resultados);

//filter

resultado = carrito.filter(function(producto){
    return producto.precio !== 500
});

console.log(resultado);