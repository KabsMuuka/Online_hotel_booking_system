// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const signUp =  async(req,res) =>{
    const {username,email,password} = req.body;
    //check if the email already exist
    const result = await pool.query(`SELECT email FROM register WHERE email = $1`,[email]);
    //checks if theres any matching email
    if(result.rows.length > 0){
        req.flash('message',`Email already in Use: ${email}`);
        res.redirect('/signup');
    }else{
    const insertQuery = `
     INSERT INTO register(username,email,password)
     VALUES($1, $2, $3); `
   try {
    //encrypt the password 
    const hashedPassword = await bcrypt.hash(password,10);
    //adding the encrypted password into the database
    await pool.query(insertQuery,[username,email,hashedPassword]);
    
    req.flash('message', 'Registration successful')
    res.redirect('/signup');

   } catch (error) {
     req.flash('message', 'Registration failed Please try after sometime')
     res.redirect('/signup');
    }
 }
}

module.exports = signUp;