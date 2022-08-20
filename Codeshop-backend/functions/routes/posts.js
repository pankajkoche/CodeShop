
const router =require('express').Router();
const User =require('../models/User')
const bcrypt =require('bcrypt');
const Post = require('../models/Post');
//Create post
router.post("/",async(req,res)=>{
    const newPost = await new Post(req.body);
    try {
        const savePost= await newPost.save();
        res.status(200).json(savePost);
        
    } catch (err) {
        res.status(500).json(err);
        console.log(console.log(err))
    }
})

//Update post

router.put("/:id",async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);

        const updatedPost= await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body,
                },
                {new:true}
            );

        res.status(200).json(updatedPost);
        }
    catch(err) {
        res.status(500).json(err)
        console.log(err)
    }
})

// GET POST
router.get("/:id",async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        return res.status(200).json(post)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})

router.get("/",async(req,res)=>{
    try {
        const post = await Post.find()
        return res.status(200).json(post)
    } catch (err) {
        console.log(err)
        return res.status(500).json(err);
    }
})

module.exports = router