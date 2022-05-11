const express = require("express");
const app = express();
require("./configs/db");
const port = process.env.PORT || 8080;
const Product = require("./models/productModel");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("not found......");
});

app.get("/product", async (req, res) => {
  try {
    const product = await Product.find();
    console.log(product);

    res.send(product);
  } catch (e) {
    res.send(e);
  }
});

app.get("/product/:name", async (req, res) => {
  try {
    const regex = new RegExp(req.params.name);
    const product = await Product.find({ product_type: regex });

    res.send(product);
  } catch (e) {
    res.send(e);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
