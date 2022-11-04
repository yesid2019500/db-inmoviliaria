const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
        try {
           await mongoose.connect( process.env.MONGODB_UR )
           console.log('DB IN CONNECT');
        } catch (error) {
                console.log( error );
     }
}

module.exports = { connectDB }