const express = require('express')
const { productsGetAll, productGetProduct, createProduct } = require('../controllers/productController')

const router = express.Router()

router.get('/', productsGetAll)
router.get('/:id', productGetProduct)
router.post('/', createProduct)

module.exports = router
