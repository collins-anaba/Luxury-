require('dotenv').config();
require('./models/user')
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const bodyParser = require('body-Parser');
const cors = require("cors");
const requireAuth = require('./middleware/requireAuth');
const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(routes);



// const firebaseConfig = {
//     apiKey: "AIzaSyAU-5AsqQ-jIuxv2Q-rcgk3oLn1wLAEY2c",
//     authDomain: "luxury-efa34.firebaseapp.com",
//     databaseURL: "https://luxury-efa34.firebaseio.com",
//     projectId: "luxury-efa34",
//     storageBucket: "luxury-efa34.appspot.com",
//     messagingSenderId: "772411429350",
//     appId: "1:772411429350:web:20cf20ff0a00ac344f4627",
//     measurementId: "G-6V81B9V4VT"
//   };

// firebase.initializeApp(firebaseConfig);




{/* <script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-analytics.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.16.0/firebase-app.js"></script> */}


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


