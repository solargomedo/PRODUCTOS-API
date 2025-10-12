const getConnection = require('../database/connection');
const Categoria = require('../models/Categoria');

exports.getCategorias = async (req, res) => {
  try {
    const connection = await getConnection();

    const result = await connection.execute(
      `SELECT CAPSNU_ID_CAT, CAPSVA_DESCRIPCION_CAT FROM CAPS_TM_CATEGORIAS`
    );

    const categorias = result.rows.map(row => {
      return new Categoria(row[0], row[1], "Descripción opcional", []);
    });

    await connection.close();
    res.json(categorias);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ mensaje: "Error al conectar con la base de datos" });
  }
};

exports.getCategoriaById = (req, res) => {
  res.json({ mensaje: 'getCategoriaById aún no implementado' });
};

exports.getCategoriaConProductos = (req, res) => {
  res.json({ mensaje: 'getCategoriaConProductos aún no implementado' });
};

exports.getProductoDeCategoria = (req, res) => {
  res.json({ mensaje: 'getProductoDeCategoria aún no implementado' });
};

exports.getCategoriasConProductos = (req, res) => {
  res.json({ mensaje: 'getCategoriasConProductos aún no implementado' });
};
