const router = require('express').Router();
const User = require('../model/User');
const {registerValidation, loginValidation} = require('../validation')
const bcrypt = require('bcryptjs');



router.get('/', (req,res) =>{
    res.send('hello');
});



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
    
    // hashing the password
    const  salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
    
        // crete a new user 
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err){
        res.status(400).send(err);
    }
});



router.post('/login', async(req,res) =>{

    const {error} = loginValidation(req.body);
    if(error) 
        return res.status(400).send(error.details[0].message);
    
    //checking if the email already exists
    const user = await User.findOne({email: req.body.email});
    
    if(!user) 
        return res.status(400).send('Invalid email !!!'); 
    
    // if password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass)
    return res.status(400).send('Invalid password !!!'); 

    res.send('logged in!');

});



module.exports = router;