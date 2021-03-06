const express = require('express');
const router = express.Router();
const app = express();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = mongoose.model('User')



//endpoint post request
router.post('/signup', async (req,res) => {
    const {firstName, lastName, email, password, telephoneNumber, ccNumber,month,year,cvc} = req.body;
    //try catch to catch duplicate emails
    try{
        const user = new User({firstName, lastName, email, password, telephoneNumber, ccNumber,month,year,cvc});
        //saves post request to the db
        await user.save();
        //creating a token
        const token = jwt.sign({userId:user._id},'SECRET_SESSION')
        res.send({token:token})
    } catch(err){
        return res.status(422).send(err.message)
    }
});

router.post('/signin', async (req,res)=> {
    const {email, password} =req.body;
    if(!email || !password){
        return res.status(422).send({error: 'Must provide email and password'})
    }
   const user =  await User.findOne({email:email});
   if (!user){
       return res.status(422).send({error: 'Invalid password or email'})
   }
   try {
       await user.comparePassword(password);
       const token = jwt.sign({userId:user._id},'SECRET_SESSION')
        res.send({token:token})
    } catch(err){
        return res.status(422).send({error: 'Invalid password or email'})
    }
});

router.post('/createStripePaymentIntent', function (req, res) {
    const stripe = require('stripe')(process.env.SECRET_KEY);
    stripe.paymentIntents.create({
      amount: 300,
      currency: 'usd'
    }, function (err, paymentIntent) {
      res.json({
        setupIntentId: paymentIntent.client_secret
      })
    });
  });

  app.use('/', router);

module.exports = router;