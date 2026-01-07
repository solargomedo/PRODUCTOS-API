class Categoria {
    constructor(id, descripcion, productos = []) {
        this.Prop1 = id;          
        this.Prop2 = descripcion; 
        this.Prop3 = "Manual";    
        this.Productos = productos;
    }
}
module.exports = Categoria;