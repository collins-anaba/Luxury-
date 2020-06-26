const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');


// next function determines if the user has a token. if so the middleware can onto the next chain of middleware
module.exports = (req, res, next) => {
    //anytime a request comes through express, it automatically lowercase's any header names
const { authorization} = req.headers;
// if auth is not approved, error response is returned to the user
if(! authorization){
    return res.status(401).send({error: "You must be logged in"})
}
}