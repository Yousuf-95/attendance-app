const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const csrfProtection = csrf({
    cookie: true
});

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

//Store objects in 'User' collection
const User = mongoose.model('User', userSchema);

// const saveUser = () => {
//     let username = 'yousuf';
//     let password = 'password';

//     const user = new userModel({
//         username,
//         password
//     });

//     user.save();
// }

// saveUser();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization,X-CSRF-TOKEN');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(
    session({
        secret: 'mySecret',
        saveUnitialized: false,
        resave: false,
        cookie: {
            httpOnly: true,
            maxAge: 3600000
        }
    })
    );
    
// app.get('/api/get-token',(req,res) => {
//     res.json({csrfToken: req.csrfToken()});
// });

// const requireAuth = (req,res,next) => {
//     const {user} = req.session;
//     if(!user){
//         return res.status(401).json({message:"Unauthorized"});
//     }
//     next();
// }


// app.use(requireAuth, (req,res,next) => {
//     console.log(req.session);
//     next();
// });


app.post('/api/login', async (req,res) => {
    const {username,password} = req.body;
    console.log(username, password);
    
    
    req.session.username = username;
    
    res.status(200).json({
        username: `${username}`
    });
});

app.get('/api/user-info', (req,res) => {
    const {username} = req.session;
    // console.log(username)
    if(!username){
        return res.status(401).json({message: "Unauthorized"});
    }
    res.json({username});
});

// app.use(csrfProtection);

app.post('/api/logout', (req,res) => {
    req.session.destroy(err => {
        if(err){
            return res.status(400).json({
                message: "There was a problem logging out"
            })
        }
        res.json({message: "Logout successful"});
    })
});


app.get('/api/user-info',(req,res) => {
    //send user info
});





mongoose.connect('mongodb://127.0.0.1:27017/qalamApp', () => console.log('connected to mongoDB local server') );

app.listen(3001, () => console.log('Server listening on port 3001'));