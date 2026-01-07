const express = require('express');
const app = express();

//permite datos en JSON
app.use(express.json());


const categoriasRoutes = require('./routes/categorias-routes');
app.use('/categorias', categoriasRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

