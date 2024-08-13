const producto={
    nombreProducto:'monitor de 20 pulgadas',
    precio:300,
    disponible:true
}

//agregar mas datos a un objeto existente
producto.imagen='imagen.jpg';

//quitar datos de un objeto existente
delete producto.disponible;

console.log(producto);
