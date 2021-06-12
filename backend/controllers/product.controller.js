const express = require('express');
const router = express.Router();
const productService = require('../services/product.service');
router.get('/products', getAllProduct);

async function getAllProduct(req, res){
    try {
        let products = await productService.getproducts();
        return res.status(200).json({ status: 200, data: products, message: "Succesfully products Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = router;