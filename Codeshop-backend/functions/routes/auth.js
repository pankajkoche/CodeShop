const router =require('express').Router();
const { model } = require('mongoose');
const User =require('../models/User')
const bcrypt = require('bcrypt');
const { request } = require('express');

// Register

router.post("/register",async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass =await bcrypt.hash(req.body.password,salt);
        const newUser=new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPass,
        });
        const user =await newUser.save();

        const {password, ...others} =user._doc;
        return res.status(200).json(others)

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

//Login
router.post('/login', async(req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        !user  && res.status(400).json('wrong credentials us!');

        const validate = await bcrypt.compare(req.body.password,user.password)
        !validate && res.status(400).json('wrong credentials pass!')
        
        const {password, ...others} =user._doc;

        return res.status(200).json(others)

    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    } 
})

module.exports = router