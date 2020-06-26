const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const User = mongoose.model('User')


//endpoint post request
router.post('/signup', async (req,res) => {
    const {email, password} = req.body;
    //try catch to catch duplicate emails
    try{
        const user = new User({email,password});
        //saves post request to the db
        await user.save();
        res.send('You made a post request')
    } catch(err){
        return res.status(422).send(err.message)
    }
});

module.exports = router;