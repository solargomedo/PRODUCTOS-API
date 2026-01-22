const { getCategorias } = require('../controller/categorias.controller');
const categoriasService = require('../services/categorias.service'); 


jest.mock('../services/categorias.service');

describe('getCategorias Controller', () => {
    let req, res, next; 

    beforeEach(() => {
        req = {};
        res = {
            json: jest.fn(),
            status: jest.fn().mockReturnThis(),
        };
        next = jest.fn(); 
        jest.clearAllMocks();
    });

    it('debería devolver 500 si el Service falla', async () => {
        categoriasService.obtenerCategorias.mockRejectedValue(new Error('Service Error'));
        await getCategorias(req, res, next); 
        expect(next).toHaveBeenCalled();
       
    });
});