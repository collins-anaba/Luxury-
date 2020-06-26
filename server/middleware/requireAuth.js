const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');


// next function determines if the user has a token. if so the middleware can onto the next chain of middleware
module.exports = (req, res, next) => {
    //anytime a request comes through express, it automatically lowercase's any header names
const { authorization} = req.headers;
// if auth is not approved, error response is returned to the user
if(!authorization){
    return res.status(401).send({error: "You must be logged in"})
}
// extract auth token. auth === "Bearer token"
const token = authorization.replace('Bearer ', '');
//verifies the token and return error message if token isn't real
jwt.verify(token,'SECRET_SESSION', async (err, payload) => {
if(err){
    return res.status(401).send({error: 'You must be logged in'})
};
// tells Mongo to go find the user who has the token
const { userId } = payload;
const user = await User.findById(userId);
//assigns user to request object
req.user = user;
next();
})
};