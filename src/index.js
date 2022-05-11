const express = require("express");
const app = express();
require("./configs/db");
const port = process.env.PORT || 8080;
const Product = require("./models/productModel");

app.use(express.json());

app.get("", (req, res) => {
  res.send("hello");
});
app.get("/user", (req, res) => {
  res.send("products.......");
});

app.listen(port, () => {
  console.log(`listening on port ${port} `);
});
