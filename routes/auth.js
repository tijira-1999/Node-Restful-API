const router = require('express').Router();
const User = require('../model/User');


router.post('/register', async (req,res) => {
    // res.send('Register');

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
    }catch(err){
        res.status(400).send(err);
    }
});
router.get('/', (req,res) =>{
    res.send('hello');
});


module.exports = router;