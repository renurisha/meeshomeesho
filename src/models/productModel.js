const { type } = require("express/lib/response");
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
  },
  product_type: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  sub_category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  discount: {
    type: String,
  },
  ratings: {
    type: String,
  },
  delivery: {
    type: String,
    required: true,
  },
  reviews: {
    type: String,
  },
  description: {
    type: String,
  },
  images: [
    {
      img1: String,
      img2: String,
      img3: String,
    },
  ],
});
const Product = new mongoose.model("Product", productSchema);
module.exports = Product;
