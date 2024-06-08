const mongoose = require('mongoose')
require('dotenv').config();
const connectString = process.env.MONGO_URI;

const connectDB = ()=>{
    return  mongoose.connect(connectString, {});
}

module.exports = connectDB

