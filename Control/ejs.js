
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
       res.render('reserve',{
        bookedDates : req.flash('bookedDates')
       }) 
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



const contact = (req,res)=> {
    try {
        //rendering index.ejs to webpage
         res.render('contact',{
            message: req.flash('message')
         }) 
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

const rooms = (req,res)=> {
    try {
        //rendering index.ejs to webpage
         res.render('rooms',{
            message: req.flash('message')
         });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


//images
const room1 = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('room1',{
            message : req.flash('message')
        });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const room2 = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('room2',{
            message : req.flash('message')
        });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const room3 = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('room3',{
            message : req.flash('message')
        });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const room4 = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('room1',{
            message : req.flash('message')
        });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}


const room5 = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('room5',{
            message : req.flash('message')
        });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const room6 = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('room6',{
            message : req.flash('message')
        });
    } catch (error) {
        res.status(404).json({message:error.message})
    }
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
    services,
    about,
    rooms,

    //images
    room1,
    room2,
    room3,
    room4,
    room5,
    room6,
}
