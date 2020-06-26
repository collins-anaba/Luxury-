const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')


//endpoint post request
router.post('/signup', async (req,res) => {
    const {email, password} = req.body;
    //try catch to catch duplicate emails
    try{
        const user = new User({email,password});
        //saves post request to the db
        await user.save();
        //creating a token
        const token = jwt.sign({userId:user._id},'SECRET_SESSION')
        res.send({token:token})
    } catch(err){
        return res.status(422).send(err.message)
    }
});

module.exports = router;