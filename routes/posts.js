const router = require('express').Router();

router.get('/', (req,res) =>{
    res.json({
        posts: {
            title: 'my first post',
            descripition: 'random data not to access'
        }
    });
})



module.exports = router;