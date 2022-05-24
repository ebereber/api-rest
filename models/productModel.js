const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  category: {
    type: String

  },
  price: {
    type: Number,
    required: true

  },
  countInStock: {
    type: Number,
    default: 0

  },
  rating: {
    type: Number,
    default: 0

  }
})

module.exports = mongoose.model('Product', ProductSchema)
