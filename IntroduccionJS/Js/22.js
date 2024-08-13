//arrow function

const sumar2 = (n1,n2) => console.log(n1+n2);

sumar2(5,10);


const aprendiendo = tecnología => console.log(`Aprendiendo: ${tecnología}.`);


aprendiendo(`JavaScript`)



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

meses.forEach( mes => {
    if (mes === 'Enero') {
        console.log('si existe');
    }
});

// some ideal para arreglos
resultados=carrito.some(producto => producto.nombre === 'Celular Pro');

//Reduce
resultados = carrito.reduce( (total, producto) => total+producto.precio,0/*El "0" es el valor inicial*/);

//filter
resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);