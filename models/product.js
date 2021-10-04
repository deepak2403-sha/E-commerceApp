const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    img: {
        type: String,
        trim: true,
        default: "/images/product.jpg"
    },
    desc: {
        type: String,
        trim: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;