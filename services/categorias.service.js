const categoriasRepository = require('../repositories/categorias.repository');

async function obtenerCategorias() {
  return await categoriasRepository.obtenerCategoriasDesdeSP();
}

module.exports = {
  obtenerCategorias
};

