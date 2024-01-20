const express = require("express");
const bcrypt = require("bcrypt")
const session = require("express-session");
const MongoDBSession = require('connect-mongodb-session')(session);
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const path = require('path')
const url = 'mongodb://localhost:27017'
const port = 301;
const app = express()
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.json()) 
app.use(express.static('public', { strict: false }));


const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String  
});
const usermodel =mongoose.model("User",schema)
const conn = mongoose.connect(url)

const store = new MongoDBSession({
    uri: url,
    collection: "mySessions",
})
app.use(session({
    secret:'key that will sign cookie',
    resave: false,
    saveUninitialized: false,
    store:store,
 })
);
// app.get('/',(req,res)=>{
//     req.session.isAuth = true;
//     console.log(req.session);
//     console.log(req.session.id);
//     res.send("Hello")

// });
app.get('/login', (req, res)=>{
    const filePath = path.join(__dirname, 'public', 'index.html')
    res.sendFile(filePath)
})
app.get('/dashboard', (req, res)=>{
    const filePath = path.join(__dirname, 'public', 'dashboard.html')
    res.sendFile(filePath)
})

app.post("/signup", async(req, res)=>{
    try {
        const{name ,email, password }= req.body
        console.log(name, email, password)
        // const salt = bcrypt.genSalt(12)

        const users= new usermodel({
            name:name,
            email:email,
            password:password
        })
         await users.save()
         console.log('successfully added')
         res.redirect('/login')   
    } catch (error) {
        console.log("New error ", error)
    }

})
app.post("/login", async(req,res)=>{
    try {
        const { email, password} = req.body;
    
    let user= await usermodel.findOne({email: email});
            res.redirect('/dashboard');
        
    }
     catch (error) {
        console.log("New error ", error)
        
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
//check if all the data sent are good data
//check if user is in db
//decrypt password
//if password tallies, we redirect