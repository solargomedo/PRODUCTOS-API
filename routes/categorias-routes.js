const express = require('express');
const router = express.Router();
const controller = require('../controller/categorias.controller');

router.get('/categorias', controller.getCategorias);


router.get('/categorias/:idCategoria', controller.getCategoriaById);


router.get('/categorias/:idCategoria/productos', controller.getCategoriaConProductos);


router.get('/categorias/:idCategoria/productos/:idProducto', controller.getProductoDeCategoria);


router.get('/categorias/productos', controller.getCategoriasConProductos);

module.exports = router;