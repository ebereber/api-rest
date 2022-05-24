
const Product = require('../models/productModel')

exports.productsGetAll = (req, res, next) => {
  Product.find()
    .then(products => res.json(products))
    .catch((err) => err.status(404).json({ message: 'No movies found' }))
}

exports.productGetProduct = (req, res) => {
  Product.findById(id)
    .then(product => res.json(product))
    .catch((err) => err.status(404).json({ message: 'No movies found' }))
}

exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then(movie => res.json({ message: 'movie was created', movie }))
    .catch(err => res.status(400).json({ error: err }))
}
