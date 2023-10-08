// bcrypt encrypts passwords into hashpasswords
const bcrypt = require('bcrypt');
const pool = require('../db/hotelDB');

const booking =  async(req,res) =>{

    // const {checkInDate,checkOutDate,price} = req.body;

    console.log(req.body);
    //check if the email already exist
//     const result = await pool.query(`SELECT email FROM register WHERE email = $1`,[email]);
//     //checks if theres any matching email
//     if(result.rows.length > 0){
        
//         res.status(403).json(`Email already in Use: ${email}`);
//     }else{

//     const insertQuery = `
//      INSERT INTO register(username,email,password)
//      VALUES($1, $2, $3); `
//    try {
//     //encrypt the password 
//     const hashedPassword = await bcrypt.hash(password,10);
//     //adding the encrypted password into the database
//     await pool.query(insertQuery,[username,email,hashedPassword]);
//     console.log('successfully added user info, into the database')
//     res.status(200).json({ message: 'Registration successful' });

//    } catch (error) {
//     res.status(500).json({ message: `Registration failed}`});
//     }
//  }
}


module.exports = booking;