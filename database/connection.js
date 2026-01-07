require('dotenv').config();
const oracledb = require('oracledb');

oracledb.initOracleClient({ configDir: process.env.DB_WALLET_PATH});

async function getConnection() {
  return await oracledb.getConnection({
    user: process.env.DB_USER_ESQUEMA,
    password: process.env.DB_PASS_ESQUEMA,
    connectString: process.env.DB_CONNECT
  });
}

module.exports = getConnection;
