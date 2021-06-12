const Product = require('../models/Product');
let service = {};
service.getproducts = getproducts;
module.exports = service;

async function getproducts(){
    try {
        var products = await Product.find()
        return products;
    } catch (e) {
        throw Error('Error')
    }
}