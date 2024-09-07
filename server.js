const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');






//const walletRouter = require('./routes/walletRoute');
const app = express();

// 1. Mongo Database Connection

connectDB();

// 2. Middleware
app.use(express.json());

app.use(cors());


app.use('/api/auth', authRoutes);



// 3. Server Creation
const PORT = process.env.PORT || 8001;
app.listen(PORT, function(){
    console.log("server is up on port " + PORT);
})

