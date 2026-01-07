const { getCategorias } = require('../controller/categorias.controller');
const Categoria = require('../models/Categoria');
const getConnection = require('../database/connection');


jest.mock('../database/connection', () => jest.fn());

describe('getCategorias', () => {
  let mockExecute, mockClose, req, res;

  beforeEach(() => {
    mockExecute = jest.fn();
    mockClose = jest.fn();

    req = {};

    res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  it('debería devolver una lista de categorías', async () => {
    mockExecute.mockResolvedValue({
      rows: [
        [1, 'muebles'],
        [2, 'ropa'],
      ],
    });

    getConnection.mockResolvedValue({
      execute: mockExecute,
      close: mockClose,
    });

    await getCategorias(req, res);

    expect(res.json).toHaveBeenCalledWith([
      new Categoria(1, 'muebles', 'Descripcion', []),
      new Categoria(2, 'ropa', 'Descripcion', []),
    ]);

    expect(mockClose).toHaveBeenCalled();
  });

  it('debería manejar error de conexión', async () => {
    getConnection.mockRejectedValue(new Error('DB error'));

    await getCategorias(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      mensaje: 'Error al conectar con la base de datos',
    });
  });
});
