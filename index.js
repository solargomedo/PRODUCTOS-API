const express = require('express');
const app = express();

app.use(express.json());

const categoriasRoutes = require('./routes/categorias-routes');
app.use('/categorias', categoriasRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, _req, res, _next) => {
  console.error(err); 

  res.status(500).json({
    message: err.message || 'Error interno del servidor'
  });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

