const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/',verify, (req,res) =>{
    // res.json({
    //     posts: {
    //         title: 'my first post',
    //         descripition: 'random data not to access'
    //     }       
    // });

    res.send(req.user);
    User.findbyOne
});



module.exports = router;