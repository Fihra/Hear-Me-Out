require('dotenv').config();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

//Login User
router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email});
    if(user === null){
        return res.status(400).send("Cannot find user");
    }

    try{
         if(await bcrypt.compare(req.body.password, user.password)){
             //Create Token using user object, and secret key from .env file
            const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET);
            //returns access token json
            res.json({accessToken: accessToken});
         }
         else{
             console.log("Wrong Password");
         }
         
    } catch(err){
        console.log(err)
        res.status(500).send();
        
    }
})

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token === null){
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err){
            return res.sendStatus(403);
        }
        console.log(user)
        req.selectedUser = user
        next();
    })
}

// router.get('/profile', authenticateToken, (req, res) => {
//     console.log(req.body)
//     const selectedUser = req.body.user;
//     res.json(selectedUser)
// })

router.get('/:id', async (req, res) => {
    try{
        const selectedUser = await User.findById(req.params.id);
        res.json(selectedUser);
    }catch(err){
        res.json({message: err});
    }
})

// email: req.body.email,
// password: req.body.password,
// alias: req.body.alias,
// firstName: req.body.firstName,
// lastName: req.body.lastName,
// location: req.body.location,
// mainRole: req.body.mainRole,
// otherRoles: req.body.otherRoles,
// instruments: req.body.instruments,
// featuredYoutube: req.body.featYoutube,
// youtubeChannel: req.body.youtube,
// bandcampLink: req.body.bandcamp,
// spotifyLink: req.body.spotifyLink,
// mainWebsite: req.body.mainWeb

router.patch('/:id', authenticateToken, async (req, res) => {
    console.log("Hit Here Update Backend")
    console.log(req.body)
    try{
        const updatedUser = await User.updateOne({
            _id: req.body.savedID}, {
                $set: req.body })
            console.log("2nd time around")

        res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
})

router.put('/:id', authenticateToken, async (req, res) => { 
    try{
        const updatedUser = await User.updateOne({
            _id: req.body.savedID}, {
                $set: {
                    email: req.body.email,
                    password: req.body.password,
                    alias: req.body.alias,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    location: req.body.location,
                    mainRole: req.body.mainRole,
                    otherRoles: req.body.otherRoles,
                    instruments: req.body.instruments,
                    featuredYoutube: req.body.featYoutube,
                    youtubeChannel: req.body.youtube,
                    bandcampLink: req.body.bandcamp,
                    spotifyLink: req.body.spotifyLink,
                    mainWebsite: req.body.mainWeb
                }})
            // console.log("2nd time around")
            // console.log(updatedUser)
        res.json(updatedUser);
    }catch(err){
        res.json({message: err});
    }
})


module.exports = router;