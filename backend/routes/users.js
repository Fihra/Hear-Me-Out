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

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email});
    //console.log("Line 42: ", user);
    if(user === null){
        return res.status(400).send("Cannot find user");
    }

    try{
         if(await bcrypt.compare(req.body.password, user.password)){
            //Current Error So far
            //TODO JWT implementation, token is probably breaking here
            //It does reach to this point but will also return catch error as well
            const accessToken = jwt.sign({user: user}, process.env.ACCESS_TOKEN_SECRET);
            console.log("Line 53: ", accessToken);
            res.json({accessToken: accessToken});
         }
         else{
             console.log("Wrong Password");
         }
         
    } catch(err){
        console.log("But I'm also here")
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
        req.user = user
        next();
    })
}

router.get('/profile', authenticateToken, (req, res) => {
    const user = req.body.user;
    res.json(user)
})

router.get('/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
})

router.put('/:id', authenticateToken, async (req, res) => {
    console.log(req.body);
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