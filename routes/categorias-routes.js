const express = require('express');
const router = express.Router();
const controller = require('../controller/categorias.controller');

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Obtiene todas las categorías
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorías
 */
router.get('/', controller.getCategorias);
module.exports = router;
