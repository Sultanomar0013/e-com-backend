const router = require('express').Router();
const {getProductById, 
    createProduct, 
    getProducts, 
    updateProductById,
    getPhoto
} = require('../controllers/productController');
const admin = require('../middlewares/admin');
const authorize = require('../middlewares/authorize');



router.route('/')
.post([authorize, admin], createProduct)
.get(getProducts);

router.route('/:id')
.get(getProductById)
.put([authorize, admin], updateProductById);

router.route('/photo/:id')
.get(getPhoto);

module.exports= router;