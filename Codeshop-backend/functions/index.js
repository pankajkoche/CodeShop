const functions = require("firebase-functions");
const express= require("express");
const app =express();
const dotenv= require('dotenv');
const authRoute =require('./routes/auth')
const cors= require('cors')
const postRoute =require('./routes/posts')

const mongoose = require('mongoose')

dotenv.config();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MANGO_URL,
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
     }, err => {
     if(err) throw err;
     console.log('Connected to MongoDB!!!')}
);

app.use("/api/auth",authRoute);
app.use("/api/posts/",postRoute);

app.listen("5000",()=>{
    console.log("backend is running.") 
});