'use strict';

const producto={
    nombreProducto:'monitor de 20 pulgadas',
    precio:300,
    disponible:true
}
Object.freeze(producto);//impide modificar o añadir elementos el objeto
Object.seal(producto);//impide añadir pero se puede modificar lo existente

producto.imagen='imagen.jpg';

console.log(producto);