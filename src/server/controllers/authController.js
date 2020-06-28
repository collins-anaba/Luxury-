const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    telephoneNumber: {
        type: Number,
        required: true
    }
});

// pre call hook that saves the instance of a user to the database. use the word function and not an anonymous function.
userSchema.pre('save', function(next){
    const user = this;
    // if password has not been changed then don't salt the password
    if(!user.isModified('password')){
        return next()
    }
    // 10 is how complex the sale algorithm is
bcrypt.genSalt(10, (err, salt) => {
if(err){
    return next(err);
}
//hashes the password
bcrypt.hash(user.password,salt, (err, hash) => {
    if(err){
        return next(err);
    }
    user.password = hash
    next();
});
});
});

// compares password created by the user to password stored in the database
userSchema.methods.comparePassword = function(candidatePassword){
    const user = this;
return new Promise((resolve, reject)=> {
    bcrypt.compare(candidatePassword,user.password, (err, isMatch)=> {
        if(err){
            return reject(err)
        }
        if(!isMatch){
            return reject(false)
        };
        resolve(true)
    });
})
}

mongoose.model('User', userSchema)