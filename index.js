const express = require('express');
const app = express();

//importing routes
const authRoute = require('./routes/auth');

// routes Middlewares
app.use('/api/user',authRoute);

app.listen(3000, () => console.log('server running'));