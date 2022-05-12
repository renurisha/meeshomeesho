const express = require("express");
const app = express();
require("./configs/db");
const port = process.env.PORT || 8080;
const Product = require("./models/productModel");

app.use(express.json());
app.get("/", (req, res) => {
  res.send("data does not exists..........");
});

app.get("/product", (req, res) => {
  Product.find()
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
