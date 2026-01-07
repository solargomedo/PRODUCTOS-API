const categoriasRepository = require('../repositories/categorias.repository');
const Categoria = require('../models/Categoria');
const Producto = require('../models/Producto');
const Estado = require('../models/Estado');

async function obtenerCategorias() {
  
    const categoriasDB = await categoriasRepository.obtenerCategoriasDesdeSP();

    return categoriasDB.map(cat => {
      
        const estadoActivo = new Estado(1, 'Activo'); 
        const productos = [
            new Producto(1, 'Producto A', 'Descripción A', 100, estadoActivo),
            new Producto(2, 'Producto B', 'Descripción B', 200, estadoActivo)
        ];

        return new Categoria(
            cat.idCategoria,          
            cat.descripcionCategoria, 
            productos                 
        );
    });
}

module.exports = {
    obtenerCategorias
};