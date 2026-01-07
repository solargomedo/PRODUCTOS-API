const Estado = require('./Estado');

 class Producto {
    constructor(id, nombre, descripcion, precio, estado) {
        this.Prop1 = id;          
        this.Prop2 = nombre;      
        this.Prop3 = descripcion; 
        this.Prop4 = precio;      
        this.Prop5 = "XXXXX";     
        this.Estado = estado;    
    }
}

module.exports = Producto;