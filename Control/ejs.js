
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
       res.render('admin')
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

const roomtype = (req,res)=>{
    try {
        //rendering index.ejs to webpage
       res.render('roomtype');
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

const Index = (req,res)=>{
    try {
        //rendering index.ejs to webpage
        res.render('index');
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
module.exports = {
    //renders
    Index,
    login,
    roomtype,
    signup,
    reserve,
    admin,
}
