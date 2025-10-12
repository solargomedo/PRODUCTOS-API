const Estado = require('./models/Estado');
const Producto = require('./models/Producto');
const Categoria = require('./models/Categoria');

const estadoActivo = new Estado("ACT", "Activo");

const producto1 = new Producto(101, "Laptop", "Portátil", 800, 10, "Dell", estadoActivo);
const producto2 = new Producto(102, "Mouse", "Inalámbrico", 20, 50, "Logitech", estadoActivo);

const categoria = new Categoria(1, "Tecnología", "Electrónica", [producto1, producto2]);

console.log(JSON.stringify(categoria, null, 2));
const express = require('express');
const app = express();