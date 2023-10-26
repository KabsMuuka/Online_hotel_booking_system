if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const session = require('express-session')
const flash = require('express-flash');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const route = require('./Routes/routes')

const {Index, login, reserve, signup, admin, home, thankyou, messageAfterBooking, room1, room2, room3, room4, room5, room6, contact, gallery, services, about} = require('./Control/ejs');

//nodemailer transporters
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
app.use('/login',login)
app.use('/signup',signup)
app.use('/reserve',reserve)
app.use('/thankyou',thankyou)
app.use('/messageAfterBooking',messageAfterBooking)

app.use('/home',home)
app.use('/contact',contact)
app.use('/gallery',gallery)
app.use('/services',services)
app.use('/about',about)



//rooms
app.use('/room1',room1);
app.use('/room2',room2);
app.use('/room3',room3);
app.use('/room4',room4);
app.use('/room5',room5);
app.use('/room6',room6);






