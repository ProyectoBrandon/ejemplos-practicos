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


//for each

carrito.forEach( producto => console.log(producto.nombre));

//map

carrito.map( producto => console.log(producto.nombre));