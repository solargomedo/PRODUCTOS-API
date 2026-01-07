const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Productos API',
    version: '1.0.0',
    description: 'Documentación de la API de productos'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local'
    }
  ]
};

const options = {
  definition: swaggerDefinition,
  apis: [path.join(__dirname, '../routes/*.js')]
};
 
module.exports = swaggerJsdoc(options);
