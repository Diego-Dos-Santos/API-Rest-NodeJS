//Rutas

const express = require ('express');
const productCtrl = require ('../controllers/product')
const api = express.Router()

//petición GET de la tienda online
api.get('/product', productCtrl.getProducts)

//petición GET de la tienda online con Id
api.get('/product/:productId', productCtrl.getProduct)

//petición PUT (Update) de la tienda online 
api.put('/product/:productId', productCtrl.updateProduct)

//petición DELETE de la tienda  online
api.delete('/product/:productId', productCtrl.deleteProduct)

//petición POST de la tienda online 
api.post('/product', productCtrl.saveProduct)

module.exports = api