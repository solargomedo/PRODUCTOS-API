const oracledb = require('oracledb');
const getConnection = require('../database/connection');

async function obtenerCategoriasDesdeSP() {
  let connection;

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
    const rows = await resultSet.getRows();

    console.log('ROWS CRUDAS ORACLE:', rows);

    await resultSet.close();

    
    return rows.map(row => ({
      idCategoria: row[0],
      descripcionCategoria: row[1]
    }));

  } catch (error) {
    throw error;
  } finally {
    if (connection) await connection.close();
  }
}

module.exports = {
  obtenerCategoriasDesdeSP
};
