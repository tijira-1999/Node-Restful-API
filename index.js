const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

// connect to database
mongoose.connect(
    
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to database !!')
    
    );

//importing routes
const authRoute = require('./routes/auth');

// routes Middlewares
app.use('/api/user',authRoute);

app.listen(3000, () => console.log('server running'));
