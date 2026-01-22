const oracledb = require('oracledb');
const getConnection = require('../database/connection');
const Categoria = require('../models/Categoria');
const Producto = require('../models/Producto');
const Estado = require('../models/Estado');

async function obtenerCategoriasDesdeSP() {
  let connection;
  let categorias = [];

  try {
    connection = await getConnection();

    const result = await connection.execute(
      `
      BEGIN
        CAPSPG_NUCLEO_CAPACITACIONES.CAPSSP_GET_NEGOCIOS(:cursor);
      END;
      `,
      {
        cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
      }
    );

    const resultSet = result.outBinds.cursor;
    const filas = await resultSet.getRows();

    for (const fila of filas) {
      const productos = await obtenerProductosPorCategoria(
        connection,
        fila[0]
      );

      categorias.push(
        new Categoria(fila[0], fila[1], productos)
      );
    }

    await resultSet.close();
    return categorias;

  } finally {
    if (connection) await connection.close();
  }
}

async function obtenerProductosPorCategoria(connection, idCategoria) {
  let productos = [];

  const result = await connection.execute(
    `
    BEGIN
      CAPSPG_NUCLEO_CAPACITACIONES.CAPSSP_GET_GRPJRC_BY_IDNEG_2(
        :PI_CAPSNU_GRP_JR_CAT_ID,
        :cursor
      );
    END;
    `,
    {
      PI_CAPSNU_GRP_JR_CAT_ID: idCategoria,
      cursor: { dir: oracledb.BIND_OUT, type: oracledb.CURSOR }
    }
  );

  const rs = result.outBinds.cursor;
  const filas = await rs.getRows();

  for (const fila of filas) {
    productos.push(
      new Producto(
        fila[0],
        fila[1],
        null,
        null,
        new Estado('ACT', 'Activo')
      )
    );
  }

  await rs.close();
  return productos;
}

module.exports = {
  obtenerCategoriasDesdeSP
};
