const express = require('express');
const app = express();

//permite datos en JSON
app.use(express.json());


const categoriasRoutes = require('./routes/categorias-routes');
app.use('/', categoriasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});