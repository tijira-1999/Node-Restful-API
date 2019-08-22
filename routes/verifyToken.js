const jwt = require('jsonwebtoken');

// this is a middleware funtion for the routes that are private and need to be protected
module.exports = function(req,res,next){
    const token = req.header('auth-token');    //checks whether we have a token while sending a request
    if(!token) 
        return res.status(401).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SEC);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}