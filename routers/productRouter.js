const router = require('express').Router();
const {getProductById, 
    createProduct, 
    getProducts, 
    updateProductById
} = require('../controllers/productController');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');



router.route('/')
.post([authorize, admin], createProduct)
.get(getProducts);

router.route('/:id')
.get(getProductById)
.put(updateProductById);

module.exports= router;