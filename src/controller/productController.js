const express = require("express");
const router = express.Router();
const Product = require("../models/productModel");

router.post("", async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdproduct = await product.save();
    console.log(createdproduct);
    res.status(201).send(createdproduct);
  } catch (e) {
    res.status(401).send(e);
  }
});
router.get("", async (req, res) => {
  try {
    const product = await Product.find();

    console.log(product);
    return res.json(product);
  } catch (e) {
    return res.status(401).json(e);
  }
});

module.exports = router;
