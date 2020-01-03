const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Get Users
router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message: err});
    }
})

//Create New User
router.post('/', async (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });
    try{
        const newUser = await user.save();
        res.json(newUser);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;