const Estado = require('./Estado');

    class Producto{
        constructor(id,nombre, descripcion, precio, estado){
            this.id = id;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.precio = precio;
            this.estado = estado;

    }
    }

module.exports = Producto;