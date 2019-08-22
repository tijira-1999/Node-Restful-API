const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//importing routes
const authRoute = require('./routes/auth');

dotenv.config();







// connect to database
mongoose.connect(
    
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to database !!')
    
    );






    // middleware
app.use(express.json());



// routes Middlewares
app.use('/api/user',authRoute);





app.listen(3000, () => console.log('server running'));
