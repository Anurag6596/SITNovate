const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/db');
const userRoutes = require('../Backend/routes/user.routes');

connectDB();


app.use(cors());

app.use('/user',userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;