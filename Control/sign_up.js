// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const sign_up =  async(req,res) =>{
    const {firstname,lastname,email,password} = req.body;
    console.log(req.body)
    //check if the email already exist
    const result = await pool.query(`SELECT email FROM register WHERE email = $1`,[email]);
    //checks if theres any matching email
    if(result.rows.length > 0){
        req.flash('message',`Email already in Use: ${email}`);
        res.redirect('/signup');
    }else{
    const insertQuery = `
     INSERT INTO register(firstname, lastname, email, password)
     VALUES($1, $2, $3, $4); `
   try {
    //encrypt the password 
    const hashedPassword = await bcrypt.hash(password,10);
    //adding the encrypted password into the database
    await pool.query(insertQuery,[firstname,lastname,email,hashedPassword]);
    
    req.flash('message',  `${firstname} ${lastname}, your Registration was successful`)
    res.redirect('/thankyou');

   } catch (error) {
     req.flash('message', 'Registration failed Please try after sometime')
     res.redirect('/signup');
    }
 }
}
module.exports = sign_up;