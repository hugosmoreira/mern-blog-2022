const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const dbConnect = require('./Config/DB/dbConnect');


const app = express();
dbConnect();
console.log(process.env)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running at port ${PORT}`) )