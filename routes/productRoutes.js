const express = require('express');
const router = express.Router();
const Product = require("../models/product");

router.get("/products", async (req, res) => {
    const products = await Product.find({});
    res.render("products/index", { products });
});

router.get('/products/new', (req, res) => {
    res.render("products/new");
})

module.exports = router;