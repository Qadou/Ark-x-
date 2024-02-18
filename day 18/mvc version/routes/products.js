const express = require('express');
const router =express.Router();
const {home,getProduct,addProduct,filterProduct,searchProduct,modifyProduct,deleteProduct}= require('../controllers/productsController');

router.use(express.json());
router.get('/',home);
router.get('/products',getProduct);
router.post('/products',addProduct);
router.get('/products/:id',searchProduct);
router.get('/products/search',filterProduct);
router.put('/products/:id',modifyProduct);
router.delete('/products/:id',deleteProduct);







module.exports = router