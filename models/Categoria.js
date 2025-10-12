const Producto = require('./Producto');

class Categoria{
    constructor(id, nombre, descripcion, productos = []){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.producto = productos;
    }
}

module.exports = Categoria;