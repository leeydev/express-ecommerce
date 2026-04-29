const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: { type: Number, default: 0 },
  description: String,
  images: [String]
});

module.exports = mongoose.model('Product', ProductSchema);
