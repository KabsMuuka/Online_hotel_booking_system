const pool = require('../db/hotelDB');

const customer = async(req,res) =>{
    const { fullName, userEmail, userPhone } = req.body;
    
    const insertQuery = ` 
    INSERT INTO customer(fullName, userEmail, userPhone)
    VALUES($1, $2, $3)
    `
    const userAlreadyExist = await pool.query(`SELECT userEmail FROM customer WHERE userEmail =$1`,[userEmail]);
    try {
        if(userAlreadyExist.rows.length > 0){
            req.flash('message','User by those credentials already exists');
            res.redirect('contact')
        }else {
            await pool.query(insertQuery,[fullName, userEmail, userPhone]);
            req.flash('message','Successfully and Securely saved your Credentials');
            res.redirect('messageAfterBooking')
        }
    } catch (error) {
        req.flash('message','Something went wrong try again');
        res.redirect('contact')
    }
}

module.exports = customer;