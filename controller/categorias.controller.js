const categoriasService = require('../services/categorias.service');


async function getCategorias(_req, res, next) {
console.log('entro a controller');
    try {
        let resultado = await categoriasService.obtenerCategorias();

        const response = {
            code: 200,
            message: "Operación exitosa.",
            data: resultado
        }
        res.status(200).json(response);
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
  getCategorias
};