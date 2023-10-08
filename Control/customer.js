const pool = require('../db/hotelDB');

const customer = async(req,res) =>{
    const { firstName,lastName,email,gender,nationality,phoneNumber } = req.body;
    const insertQuery = ` 
    INSERT INTO customers(firstName,lastName,email,gender,nationality,phoneNumber)
    VALUES($1, $2, $3,$4, $5, $6)
    `
    try {
        await pool.query(insertQuery,[firstName,lastName,email,gender,nationality,phoneNumber]);
        console.log(`successfully inserted data`);
        res.status(200).json({ message: 'successful added customer infor' });
    } catch (error) {
        console.log('failed to save data into database',error);
    }
}

module.exports = customer;