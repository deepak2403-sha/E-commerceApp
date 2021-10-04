const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const seedDB = require("./seed");
const productRoutes = require("./routes/productRoutes");

mongoose
  .connect("mongodb://localhost:27017/shop-db")
  .then((m) => console.log("DB Connected"))
  .catch((e) => console.log(e));

// seedDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.send("Connected");
});

app.use(productRoutes);

app.listen(3000, (req, res) => {
  console.log("Sever is listening at port 3000");
});
