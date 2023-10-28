const pool = require('../db/hotelDB');

const customer = async(req,res) =>{
    const { fullName, userEmail, userPhone } = req.body;
    console.log(req.body)
    const insertQuery = ` 
    INSERT INTO customers(fullName, userEmail, userPhone)
    VALUES($1, $2, $3)
    `
    try {
        await pool.query(insertQuery,[fullName, userEmail, userPhone]);
        req.flash('message','successful added customer infor');
        res.redirect('messageAfterBooking')
    } catch (error) {
        req.flash('message','Something went wrong try again');
        res.redirect('contact')
    }
}

module.exports = customer;