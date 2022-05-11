const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const Product = require("./models/productModel");
const productController = require("./controller/productController");

require("./configs/db");

app.use(express.json());
app.use("/products", productController);

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
