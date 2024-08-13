//clases

class Producto{
    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de : $ ${this.precio} `;
    }
    
    obtenerPrecio(){
        console.log(this.precio);
        
    }
}



const producto2 = new Producto ('Monitor curvo de 40 pulgadas',800);
const producto3 = new Producto ('Laptop',300);

console.log(producto2.formatearProducto());
console.log(producto3);

//herencia

class Libro extends Producto{
    constructor(nombre,precio,id){
        super(nombre,precio);
        this.id=id;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su id es:${this.id} `;
    }
};

const libro =new Libro('javaScript',120,'32158432');

console.log(libro.formatearProducto());