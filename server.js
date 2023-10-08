if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const session = require('express-session')
const flash = require('express-flash');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const route = require('./Routes/routes')

const {Index,login,reserve,signup,admin,roomtype} = require('./Control/ejs');

//nodemailer transporter
const app = express();
app.use(express.json());


//middleware
app.use(bodyParser.urlencoded({ extended:true }));
//static images
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;
app.listen(port,(req,res)=>{
    console.log(`running on port ${port}`)
})
//views 
app.set('view engine','ejs');

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

//route
app.use('/',route);


//ejs
app.use('/index',Index)
app.use('/admin',admin)
app.use('/roomtype',roomtype)
app.use('/login',login)
app.use('/signup',signup)
app.use('/reserve',reserve)






//saving imgs in the database!
// function Pick(imageID){
//     const imgElement = document.getElementById(imageID);
    
//     const selectedSrc = imgElement.scr;
//     const selectedAlt = imgElement.alt;
//     app.post('/api/images',(req,res)=>{
//         console.log(selectedAlt);
//         console.log(selectedSrc);
//     });
// }
// Pick();
