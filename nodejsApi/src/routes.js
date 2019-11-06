const express = require('express');
const routes = express.Router();

const ProductController = require("./controller/ProductController");
routes.get('/products/zap', ProductController.index);
routes.get('/products/zap/:id', ProductController.show);
routes.post('/products/zap', ProductController.store);
routes.put('/products/zap/:id', ProductController.update);
routes.delete('/products/zap/:id', ProductController.destroy);

module.exports = routes;