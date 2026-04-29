const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce');

const ProductSchema = new mongoose.Schema({
  name: String, price: Number, category: String, stock: Number
});

const Product = mongoose.model('Product', ProductSchema);

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

app.listen(3000, () => console.log('E-commerce API running on port 3000'));
