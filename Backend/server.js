const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000;
const express = require('express');
const cors = require('cors');
// const paymment = require('./routes/payment');

app.use(cors());

const server = http.createServer(app);

// app.use('/payment', paymment);

server.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});