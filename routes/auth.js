const router = require('express').Router();
const User = require('../model/User');
const {registerValidation} = require('../validation')



router.post('/register', async (req,res) => {
    // res.send('Register');

    const {error} = registerValidation(req.body);
    // res.send(error.details[0].message);

    if(error) 
        return res.status(400).send(error.details[0].message);

    //checking if the user already exists
    const emailExist = await User.findOne({email: req.body.email});
    
    if(emailExist) 
        return res.status(400).send('Email already exists'); 
    
    // crete a new user 
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