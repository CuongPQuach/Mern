const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productname: {
        type: String,
        minlength:[3,'Product Need to be at least 3'],
        maxlength:[45,'Done need to be have 45 character'],
    },
    productprice: {
        type: Number,
        min:[1,'Not a for Giving out'],
    },
    productdescription:{
        type: String,
        minlength:[3,'Need to In put Item Description'],
        maxlength:[45,'Keep It Systom Stupid']
    },
}, {timestamps:true})

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;