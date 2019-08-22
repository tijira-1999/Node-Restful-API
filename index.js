const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//importing routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();







// connect to database
mongoose.connect(
    
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('connected to database !!')
    
    );






    // middleware  so that the fetched data from server is readable
app.use(express.json());



// routes Middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);





app.listen(3000, () => console.log('server running'));
