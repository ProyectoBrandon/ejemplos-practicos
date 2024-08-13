//programación orientada a objetos

//Obj lit
// const Producto = {
//     nombre :'Tablet',
//     precio:500
// }
//obj constructor

function Producto (nombre, precio,disponible){
    this.nombre=nombre;
    this.precio=precio;
    this.disponible=disponible
}
// prototype nos va permitir crear funciones que solo se apliquen a un objeto en especifico.

Producto.prototype.formatearProducto=function() {
    return `El producto ${this.nombre} tiene un precio de : $ ${this.precio} `;
}

const producto2 = new Producto ('Monitor curvo de 40 pulgadas',800,true);
const producto3 = new Producto ('Laptop',300,false);
const producto4 = new Producto ('Celular',200,true);
const producto5 = new Producto ('calculadora',100,true);


console.log(producto4.formatearProducto ());
console.log(producto3.formatearProducto ());
console.log(formatearProducto(producto2));