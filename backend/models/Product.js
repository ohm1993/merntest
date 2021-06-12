const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
   name: String,
   description: String,
   price: Number,
   images: [String],
   categories: [String]
});
module.exports = mongoose.model('Product', ProductSchema);