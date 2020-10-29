const {Router} = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchControllers')

const routes = Router();

// Metodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmentros:

// Query Params: request.query (Filtros, odernação paginação,...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para crianção ou alteração de um registro)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

module.exports = routes;