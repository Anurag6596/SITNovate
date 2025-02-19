const http = require('http');
const app = require('./app');
const port = process.env.PORT || 4000;
const express = require('express');



const server = http.createServer(app);

app.use("/payment", require("./routes/payment"));

server.listen(port, () => { 
    console.log(`Server is running on port ${port}`);
});