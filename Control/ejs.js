
//imports
const nodemailer = require('nodemailer')

//rendering pages on webpage using EJS
const login = (req,res)=>{
    try {
        //rendering index.ejs to webpage
       res.render('login', {
        message : req.flash('message')
       }) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
const admin = (req,res)=>{
    try {
        //rendering index.ejs to webpage
       res.render('admin',{
        message: req.flash('message')
       });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const signup = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('signup',{
        message: req.flash('message')
       });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const Index = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('index',{
            userid : req.flash('userid')
        });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
const reserve = (req,res)=>{
    try {
        //rendering index.ejs to webpage
       res.render('reserve') 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
const thankyou = (req,res)=> {
    try {
        //rendering index.ejs to webpage
     res.render('thankyou', {
        message: req.flash('message')

       }) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const messageAfterBooking = (req,res)=> {
    try {
        //rendering index.ejs to webpage
     res.render('messageAfterBooking', {
        message: req.flash('message')
       }) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const home = (req,res)=> {
    try {
        //rendering index.ejs to webpage
         res.render('home', {
        message: req.flash('message')
       }) 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const services = (req,res)=> {
    try {
        //rendering index.ejs to webpage
         res.render('services') 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const gallery = (req,res)=> {
    try {
        //rendering index.ejs to webpage
         res.render('gallery') 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const contact = (req,res)=> {
    try {
        //rendering index.ejs to webpage
         res.render('contact') 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const about = (req,res)=> {
    try {
        //rendering index.ejs to webpage
         res.render('about') 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


//images
const room1 = (req,res)=>{
    res.render('room1');
}


const room2 = (req,res)=>{
    res.render('room2');
}

const room3 = (req,res)=>{
    res.render('room3');
}

const room4 = (req,res)=>{
    res.render('room4');
}

const room5 = (req,res)=>{
    res.render('room5');
}

const room6 = (req,res)=>{
    res.render('room6');
}





module.exports = {
    //renders
    Index,
    login,
    signup,
    reserve,
    admin,
    thankyou,
    messageAfterBooking,
    home,
    contact,
    gallery,
    services,
    about,

    //images
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
}
