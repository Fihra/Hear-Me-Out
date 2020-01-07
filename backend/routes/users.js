const express = require('express');
const bcrypt = require('bcryptjs');

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

    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            email: req.body.email,
            password: hashedPassword
        });

        const newUser = await user.save();
        res.json(newUser);
    }catch(err){
        res.json({message: err});
    }
})

router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
})

router.put('/:id', async (req, res) => {
    console.log(req.body);
    debugger;
    try{
        const updatedUser = await User.updateOne({
            _id: req.params.id}, {
                $set: {
                    email: req.body.email,
                    alias: req.body.alias,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    location: req.body.location,
                    mainRole: req.body.mainRole,
                    otherRoles: req.body.otherRoles,
                    instruments: req.body.instruments,
                    featuredYoutube: req.body.featYoutube,
                    bandcampLink: req.body.bandcamp,
                    spotifyLink: req.body.spotify,
                    mainWebsite: req.body.mainWeb 
                }
            })
        res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;