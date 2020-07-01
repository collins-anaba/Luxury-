require('dotenv').config();
require('./models/user')
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const bodyParser = require('body-Parser');
const requireAuth = require('./middleware/requireAuth');
const app = express();


app.use(bodyParser.json())
app.use(routes);

//endpoint get request
app.get('/', requireAuth,(req, res) => {
    res.send(`Your email: ${req.user.email}`);
});



app.listen(5000, () => console.log('Listening on Port 5000'))



const mongoUri = 'mongodb+srv://admin:collinsanaba@cluster0-xlqku.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true
});
mongoose.connection.on("connected", ()=> {
    console.log("Connected to mongo instance")
});
mongoose.connection.on('error', (err)=> {
    console.log("Error connecting to mongo", err)
});


