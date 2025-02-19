const dotenv = require('dotenv');
const connectDB = require('./db/db');
const cookieParser = require('cookie-parser');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/user.routes');

connectDB();


app.use(cors());
app.use(cookieParser());

app.use('/user',userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;