const express = require("express");
const app = express();
require("./configs/db");
const port = process.env.PORT || 8080;
const Product = require("./models/productModel");

app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json("page not found");
});

app.post("/product", async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdproduct = await product.save();
    console.log(createdproduct);
    res.status(201).send(createdproduct);
  } catch (e) {
    res.status(401).send(e);
  }
});
app.get("/product", async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json(product);
  } catch (e) {
    res.status(401).json(e);
  }
});
app.get("/product/:name", async (req, res) => {
  try {
    const regex = new RegExp(req.params.name);
    const product = await Product.find({ name: regex });

    res.status(200).json(product);
  } catch (e) {
    res.status(401).json(e);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
