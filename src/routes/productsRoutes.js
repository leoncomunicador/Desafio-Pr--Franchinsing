const router = require('express').Router();
const rescue = require('express-rescue');

const productsControllers = require('../controllers/productsControllers');

router.get('/:id', rescue(productsControllers.getProductsId));

router.get('/', rescue(productsControllers.getAllProducts));

router.put('/:id', rescue(productsControllers.updateProduct));

router.delete('/:id', rescue(productsControllers.deleteProduct));

module.exports = router;
