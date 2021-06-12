const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const PORT = 4000;
app.use(cors());
mongoose.connect(config.database, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
app.use('/', require('./controllers/product.controller'));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});