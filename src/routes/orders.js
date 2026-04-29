const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

router.post('/', async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
});

router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

module.exports = router;
