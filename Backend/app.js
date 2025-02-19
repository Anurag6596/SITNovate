const dotenv = require('dotenv');
const connectDB = require('./db/db');
const cookieParser = require('cookie-parser');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/user.routes');
const isUserLoggedIn = require('./middlewares/isLoggedin');
const paymment = require('./routes/payment');
connectDB();



app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.get('/',isUserLoggedIn, (req, res) => {
    return res.json({status:true,message:"Authorized"})
});
app.use("/auth",userRoutes);
app.use('/payment', paymment);



app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;